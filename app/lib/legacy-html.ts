import fs from "node:fs";
import path from "node:path";

const EXTERNAL_SCRIPT_TAGS = /<script\b[^>]*\bsrc=["'][^"']+["'][^>]*>[\s\S]*?<\/script>/gi;
const INLINE_SCRIPT_TAGS = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
const YEAR_SCRIPT_TAG =
  /<script>\s*document\.write\(new Date\(\)\.getFullYear\(\)\);\s*<\/script>/gi;

const LEGACY_HTML_PATHS = {
  "index.html": path.join(/* turbopackIgnore: true */ process.cwd(), "index.html"),
  "portfolio.html": path.join(/* turbopackIgnore: true */ process.cwd(), "portfolio.html"),
} as const;

type LegacyHtmlFile = keyof typeof LEGACY_HTML_PATHS;

export function readLegacyBodyHtml(fileName: LegacyHtmlFile) {
  const htmlPath = LEGACY_HTML_PATHS[fileName];
  const raw = fs.readFileSync(htmlPath, "utf8");

  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let body = bodyMatch?.[1] ?? "";

  body = body
    .replace(YEAR_SCRIPT_TAG, String(new Date().getUTCFullYear()))
    .replace(EXTERNAL_SCRIPT_TAGS, "")
    .replace(INLINE_SCRIPT_TAGS, "")
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="contact\.html"/g, 'href="/contact"')
    .replace(/href="portfolio\.html"/g, 'href="/portfolio"')
    .replace(/href="resume\.pdf"/g, 'href="/resume.pdf"')
    .replace(/src="img\//g, 'src="/img/')
    .replace(/src="fonts\//g, 'src="/fonts/')
    .replace(/src="css\//g, 'src="/css/')
    .replace(/src="js\//g, 'src="/js/')
    .replace(/src="vendors\//g, 'src="/vendors/');

  return body.replace(/\r\n/g, "\n");
}

export function readLegacyBodyHtmlWithoutHomeBanner(fileName: LegacyHtmlFile) {
  const body = readLegacyBodyHtml(fileName);

  return body.replace(
    /<section class="home_banner_area">[\s\S]*?<\/section>/i,
    ""
  );
}
