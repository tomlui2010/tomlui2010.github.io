import { readLegacyBodyHtml } from "./lib/legacy-html";

export default function HomePage() {
  const html = readLegacyBodyHtml("index.html");
  return <main dangerouslySetInnerHTML={{ __html: html }} />;
}
