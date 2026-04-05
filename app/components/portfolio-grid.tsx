const PROJECTS = [
  {
    title: "Paws & Claws",
    image: "/img/projects/pawsandclaws.png",
    href: "https://github.com/tomlui2010/pawsandclaws",
  },
  {
    title: "Spring Batch Bulk Email",
    image: "/img/projects/bulkemail.png",
    href: "https://github.com/tomlui2010/spring-batch-bulk-email",
  },
  {
    title: "Static Website Deployment on AWS",
    image: "/img/projects/staticwebsite.png",
    href: "https://github.com/tomlui2010/udacity",
  },
  {
    title: "ValidataJS",
    image: "/img/projects/validatajs.png",
    href: "https://github.com/tomlui2010/validataJS",
  },
  {
    title: "Crypto Price Tracker",
    image: "/img/projects/cryptopricetracker.png",
    href: "https://github.com/tomlui2010/crypto-price-tracker",
  },
  {
    title: "Purchasing Power Parity",
    image: "/img/projects/purchasingpowerparity.png",
    href: "https://github.com/tomlui2010/pppcalculator",
  },
  {
    title: "House Price Predictor",
    image: "/img/projects/housepricepredictor.png",
    href: "https://github.com/tomlui2010/house-price-prediction-microservice-sklearn-kubernetes",
  },
] as const;

export default function PortfolioGrid() {
  return (
    <section className="portfolio_area section_gap">
      <div className="container">
        <div className="row portfolio-grid justify-content-center">
          {PROJECTS.map((project) => (
            <div key={project.title} className="col-lg-4 col-md-6 all popular">
              <article className="portfolio_box">
                <h4 className="project-title text-center mb-3">{project.title}</h4>
                <div className="single_portfolio">
                  <img className="img-fluid w-100" src={project.image} alt={project.title} />
                  <div className="overlay"></div>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={project.title}>
                    <div className="icon">
                      <span className="lnr lnr-cross"></span>
                    </div>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
