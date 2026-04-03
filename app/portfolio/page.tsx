import { readLegacyBodyHtml } from "../lib/legacy-html";

export default function PortfolioPage() {
  const html = readLegacyBodyHtml("portfolio.html");
  return <main dangerouslySetInnerHTML={{ __html: html }} />;
}
