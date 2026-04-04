import HomeHero from "./components/home-hero";
import SiteHeader from "./components/site-header";
import { readLegacyBodyHtmlWithoutHomeBanner } from "./lib/legacy-html";

export default function HomePage() {
  const html = readLegacyBodyHtmlWithoutHomeBanner("index.html");

  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}
