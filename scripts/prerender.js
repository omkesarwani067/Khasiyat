const fs = require("fs");
const path = require("path");
const http = require("http");
const handler = require("serve-handler");

const OUT = path.resolve(__dirname, "..", "build");
const PORT = 5055;
const SITE = "https://khaasiyatpahalgam.com";
const IS_CI = !!(process.env.VERCEL || process.env.CI);

function fail(msg) {
  console.error("PRERENDER FAILED:", msg);
  // On Vercel/CI a failed prerender must fail the deploy; locally just warn.
  process.exit(IS_CI ? 1 : 0);
}

async function launchBrowser() {
  const puppeteer = require("puppeteer-core");
  if (IS_CI) {
    const chromium = (await import("@sparticuz/chromium")).default;
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: "shell",
    });
  }
  const candidates = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].filter(Boolean);
  const executablePath = candidates.find((p) => fs.existsSync(p));
  if (!executablePath) return null;
  return puppeteer.launch({ executablePath, headless: true, args: ["--no-sandbox"] });
}

(async () => {
  if (!fs.existsSync(path.join(OUT, "index.html"))) fail("build/index.html not found");

  const server = http.createServer((req, res) =>
    handler(req, res, { public: OUT, rewrites: [{ source: "**", destination: "/index.html" }] })
  );
  await new Promise((r) => server.listen(PORT, r));

  const browser = await launchBrowser();
  if (!browser) {
    server.close();
    return fail("No Chrome found locally (set CHROME_PATH). Skipping prerender.");
  }

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 900 });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: "load", timeout: 60000 });

    // Wait until the real H1 has text
    await page.waitForFunction(
      () => {
        const h = document.querySelector("h1");
        return h && h.textContent.trim().length > 3;
      },
      { timeout: 30000 }
    );

    // Scroll through so scroll-revealed sections mount
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        const t = setInterval(() => {
          window.scrollBy(0, 600);
          y += 600;
          if (y >= document.body.scrollHeight + 600) {
            clearInterval(t);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 150);
      });
    });
    await new Promise((r) => setTimeout(r, 1000));

    let html = await page.content();
    html = html.replaceAll(`http://localhost:${PORT}`, SITE);

    // Sanity checks
    const body = html.replace(/<noscript>[\s\S]*?<\/noscript>/gi, "");
    const h1Count = (body.match(/<h1[\s>]/gi) || []).length;
    if (h1Count === 0) fail("no <h1> in prerendered HTML");
    if (h1Count > 1) console.warn(`WARNING: ${h1Count} <h1> tags found, expected 1`);
    if (/enable javascript/i.test(body)) fail("fallback text found outside <noscript>");
    if (!html.includes('rel="canonical"')) fail("canonical missing");
    if (!html.includes("application/ld+json")) fail("JSON-LD missing");

    fs.writeFileSync(path.join(OUT, "index.html"), html);
    console.log(`prerendered / (h1: ${h1Count}, ${Math.round(html.length / 1024)} KB)`);
  } catch (e) {
    fail(e.message);
  } finally {
    await browser.close();
    server.close();
  }
})();