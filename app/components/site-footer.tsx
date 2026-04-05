const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/thomas.louis.925",
    icon: "fa-facebook",
    label: "Facebook",
  },
  {
    href: "https://twitter.com/tomlui2010",
    icon: "fa-twitter",
    label: "Twitter",
  },
  {
    href: "https://www.linkedin.com/in/thomaslouisc/",
    icon: "fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/tomlui2010",
    icon: "fa-github",
    label: "GitHub",
  },
  {
    href: "mailto:tomlui2010@gmail.com",
    icon: "fa-google",
    label: "Email",
  },
] as const;

export default function SiteFooter() {
  const year = new Date().getUTCFullYear();

  return (
    <footer className="footer_area tl-site-footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer_top flex-column">
              <div className="footer_logo">
                <h4>Follow Me</h4>
              </div>
              <div className="footer_social">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  >
                    <i className={`fa ${link.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row footer_bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text">
            Copyright &copy;{year} All rights reserved | This template is made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
