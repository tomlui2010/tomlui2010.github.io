import HomeHero from "./components/home-hero";
import HomeContent from "./components/home-content";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <HomeContent />
      </main>
      <SiteFooter />
    </>
  );
}
