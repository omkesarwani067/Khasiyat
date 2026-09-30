const fs = require("fs");
const path = require("path");
const http = require("http");
const handler = require("serve-handler");
const puppeteer = require("puppeteer");

const OUT = path.resolve(__dirname, "..", "build");
const PORT = 5055;
const SITE = "https://khaasiyatpahalgam.com";

(async () => {
  const server = http.createServer((req, res) =>
    handler(req, res, { public: OUT, rewrites: [{ source: "**", destination: "/index.html" }] })
  );
  await new Promise((r) => server.listen(PORT, r));

  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle0" });

  // Wait for preloader to disappear (it shows for 3000ms)
  await page.waitForSelector(".preloader", { hidden: true, timeout: 10000 }).catch(() => {});

  // Then wait for h1 to appear
  await page.waitForSelector("h1", { timeout: 20000 });

  // Scroll through the page so lazy-loaded / scroll-revealed sections render
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const t = setInterval(() => {
        window.scrollBy(0, 600);
        y += 600;
        if (y >= document.body.scrollHeight) {
          clearInterval(t);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 150);
    });
  });
  await new Promise((r) => setTimeout(r, 800));

  let html = await page.content();
  html = html.replaceAll(`http://localhost:${PORT}`, SITE);
  fs.writeFileSync(path.join(OUT, "index.html"), html);
  console.log("prerendered /");

  await browser.close();
  server.close();
})().catch((e) => {
  console.warn("Prerender skipped:", e.message);
  process.exit(0);
});
