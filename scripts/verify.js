const fs = require("fs");
const path = require("path");

const htmlPath = path.resolve(__dirname, "..", "build", "index.html");
if (!fs.existsSync(htmlPath)) {
  console.error("build/index.html does not exist!");
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, "utf8");

console.log("=== HEAD & SEO CHECKS ===");
console.log("Canonical occurrences:", (html.match(/rel="canonical"/gi) || []).length);
console.log("Keywords meta occurrences:", (html.match(/name="keywords"/gi) || []).length);
console.log("localhost occurrences:", (html.match(/localhost/gi) || []).length);
console.log("http:// occurrences:", (html.match(/http:\/\//gi) || []).length);
const httpMatches = html.match(/http:\/\/[^\s"'<>]+/gi) || [];
console.log("Unique http:// matches:", [...new Set(httpMatches)]);

console.log("\n=== HEADING CHECKS ===");
const h1s = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
console.log("h1 count:", h1s.length);
h1s.forEach((h, i) => console.log(`  h1[${i}]:`, h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()));

const h2s = html.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
console.log("h2 count:", h2s.length);
h2s.forEach((h, i) => console.log(`  h2[${i}]:`, h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()));

console.log("\n=== CONTENT CHECKS ===");
console.log("Contains 'Pure Veg Restaurant in Pahalgam':", html.includes("Pure Veg Restaurant in Pahalgam"));
console.log("Contains menu item text:", /Paneer|Kashmiri|Roti|Dal|Thali/i.test(html));
console.log("Contains review text:", /review|guest|Khaasiyat/i.test(html));
const outsideNoscript = html.replace(/<noscript>[\s\S]*?<\/noscript>/gi, "");
console.log("Contains enable javascript (outside noscript):", (outsideNoscript.match(/enable javascript/gi) || []).length);

console.log("\n=== IMG ALT CHECKS IN BUILD ===");
const imgs = html.match(/<img[^>]*>/gi) || [];
console.log("Total <img> tags in build:", imgs.length);
const imgsWithoutAlt = imgs.filter(img => !/alt\s*=/i.test(img));
console.log("<img> without alt in build:", imgsWithoutAlt.length);
imgsWithoutAlt.forEach(img => console.log("  Missing alt:", img));

console.log("\n=== JSON-LD CHECKS ===");
const jsonLdMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
console.log("JSON-LD blocks:", jsonLdMatches.length);
jsonLdMatches.forEach((block, idx) => {
  const content = block.replace(/<\/?script[^>]*>/gi, "");
  try {
    const parsed = JSON.parse(content);
    console.log(`JSON-LD [${idx}] type:`, parsed["@type"]);
    console.log("  Valid JSON: true");
    console.log("  Name:", parsed.name);
    console.log("  URL:", parsed.url);
  } catch(e) {
    console.log(`JSON-LD [${idx}] parse error:`, e.message);
  }
});
