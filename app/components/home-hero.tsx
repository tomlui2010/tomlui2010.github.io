export default function HomeHero() {
  return (
    <section className="home_banner_area ascii-home-banner">
      <div className="banner_inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner_content">
                <h5 className="text-uppercase">Senior Software Engineer</h5>
                <p className="ascii-home-banner__summary">
                  Principal Quality Engineer and automation leader focused on
                  shipping reliable systems across web, API, data, and cloud
                  platforms.
                </p>
                <div className="banner_actions">
                  <div className="banner_primary_actions d-flex align-items-center">
                    <a className="primary_btn tr-bg" href="/resume.pdf">
                      <span>Get CV</span>
                    </a>
                    <a className="primary_btn tr-bg" href="/portfolio">
                      <span>Portfolio</span>
                    </a>
                    <a
                      className="primary_btn tr-bg"
                      href="https://github.com/tomlui2010/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Github Repo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="home_right_img ascii-home-banner__image">
                <img src="/img/about-us.png" alt="Thomas Louis portrait" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
