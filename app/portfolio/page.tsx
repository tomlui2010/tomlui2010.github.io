import PortfolioGrid from "../components/portfolio-grid";
import SiteFooter from "../components/site-footer";
import SiteNav from "../components/site-nav";

export default function PortfolioPage() {
  return (
    <>
      <SiteNav currentPath="/portfolio" />
      <main>
        <section className="banner_area tl-page-banner">
          <div className="banner_inner d-flex align-items-center">
            <div className="container">
              <div className="banner_content text-center">
                <h2>Project Portfolio</h2>
              </div>
            </div>
          </div>
        </section>
        <PortfolioGrid />
      </main>
      <SiteFooter />
    </>
  );
}
