import TestimonialsCarousel, { type Testimonial } from "./testimonials-carousel";

const EXPERTISE_ITEMS = [
  {
    image: "/img/services/s1.png",
    title: "Test Automation and Leadership",
    description: "15 years of experience in functional and non-functional testing.",
  },
  {
    image: "/img/services/s2.png",
    title: "AI & Machine Learning",
    description: "Udacity Nanodegree in AI and machine learning.",
  },
  {
    image: "/img/services/s3.png",
    title: "Cloud & DevOps",
    description: "Udacity Nanodegree in Cloud DevOps Engineering.",
  },
  {
    image: "/img/services/s4.png",
    title: "Cyber Security",
    description: "Currently pursuing a TAFE Certificate in Cyber Security.",
  },
] as const;

const TESTIMONIALS: Testimonial[] = [
  {
    image: "/img/testimonials/VinayRao.jpeg",
    name: "Vinay Rao",
    quote:
      "Thomas has been a very hard working person who has demonstrated excellent analytical skills during his tenure as a Quality Engineer with us.",
  },
  {
    image: "/img/testimonials/GuruprasadKhadke.jpeg",
    name: "Guruprasad Khadke",
    quote:
      "I have worked with Thomas for around 3 years and I strongly recommend him. I always admired his quick learning abilities.",
  },
  {
    image: "/img/testimonials/SwapnilA.jpeg",
    name: "Swapnil Abhyankar",
    quote:
      "Thomas is a hard working person with high dedication for his work. He is passionate about what he does and goes the extra mile to achieve the targets.",
  },
  {
    image: "/img/testimonials/TammyCramer.jpeg",
    name: "Tammy Cramer",
    quote:
      "Thomas has been a major player in Pune, India side of Barclays since day one. He learned quickly and helped grow a team from 4 to 11 members in a short time.",
  },
  {
    image: "/img/testimonials/SaurabhSingh.jpeg",
    name: "Saurabh Singh",
    quote: "A creative problem-solver is the phrase that comes to mind when I think about Thomas.",
  },
] as const;

export default function HomeContent() {
  return (
    <>
      <section className="about_area section_gap">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img src="/img/banner/home-right.png" alt="Illustration representing Thomas Louis" />
              </div>
            </div>

            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <h2>About Me</h2>
                <div className="about-content">
                  <p>
                    I am a results-driven <span className="highlight-text">Principal Quality
                    Engineer</span> and <span className="highlight-text">Test Automation
                    Leader</span> with <span className="highlight-text">14+</span> years of
                    experience designing, building, and leading high-impact automation
                    solutions across web, mobile, API, data, and performance layers.
                  </p>

                  <p>
                    Holding Nanodegrees in <span className="highlight-text">Cloud DevOps
                    Engineering</span> and <span className="highlight-text">AI Programming with
                    Python</span>, I blend deep test engineering expertise with modern DevOps
                    practices, cloud infrastructure, and AI-assisted quality initiatives.
                  </p>

                  <p>
                    Known for transforming flaky pipelines into fast, reliable, and observable
                    delivery systems, I bring a balance of technical leadership, hands-on
                    engineering, and cross-functional collaboration.
                  </p>

                  <p>Lets connect to explore how I can help your team achieve quality at speed and scale.</p>

                  <a className="primary_btn mt-4" href="/resume.pdf" target="_blank" rel="noreferrer">
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>Expertise</h2>
              </div>
            </div>
          </div>
          <div className="row feature_inner">
            {EXPERTISE_ITEMS.map((item) => (
              <div key={item.title} className="col-lg-3 col-md-6">
                <div className="feature_item">
                  <img src={item.image} alt="" aria-hidden="true" />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>Colleagues Say About Me</h2>
                <p>Who better to certify your work than the people who worked with you.</p>
              </div>
            </div>
          </div>

          <TestimonialsCarousel testimonials={TESTIMONIALS} />
        </div>
      </section>
    </>
  );
}
