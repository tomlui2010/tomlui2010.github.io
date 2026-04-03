"use client";

import { useMemo, useState, type FormEvent } from "react";

type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export default function ContactPage() {
  const styles = useMemo(
    () => `
      .banner_area .banner_inner { min-height: 160px; }
      .banner_area .banner_content { padding: 16px 0; }
      .contact_area.section_gap { padding-top: 0; }
      .banner_area { margin-bottom: 0; }
    `,
    []
  );

  const [values, setValues] = useState<ContactValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<
    | null
    | {
        type: "success" | "error";
        message: string;
      }
  >(null);

  const validate = (v: ContactValues): ContactErrors => {
    const next: ContactErrors = {};

    const name = v.name.trim();
    const email = v.email.trim();
    const subject = v.subject.trim();
    const message = v.message.trim();

    if (!name) next.name = "Your name is required.";
    else if (name.length < 2) next.name = "Name must be at least 2 characters.";

    if (!email) next.email = "Your email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";

    if (!subject) next.subject = "Subject is required.";
    else if (subject.length < 4)
      next.subject = "Subject must be at least 4 characters.";

    if (!message) next.message = "Message is required.";
    else if (message.length < 20)
      next.message = "Message must be at least 20 characters.";

    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus(null);

    if (Object.keys(nextErrors).length > 0) return;

    // GH Pages can't run your PHP mailer; this is a client-side only flow.
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 650));
    setSubmitting(false);

    setValues({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setStatus({
      type: "success",
      message: "Thanks! Your message has been validated (no email is sent on GitHub Pages).",
    });
  };

  const year = new Date().getUTCFullYear();

  return (
    <>
      <style>{styles}</style>

      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="/">
                <img src="/img/favicon.png" alt="" />
              </a>
              <a className="navbar-brand logo_h" href="/portfolio">
                <img src="/img/favicon.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/portfolio">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content text-center">
              <h2>Let's Connect</h2>
              <div className="page_link">
                <p className="text-white mt-3">
                  Have a project in mind? I'd love to hear about it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_area section_gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 mb-4 mx-auto">
              <div className="contact_info">
                <div className="info_item">
                  <i className="lnr lnr-home"></i>
                  <h6>New South Wales, Australia</h6>
                  <p>Available for remote work worldwide</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-phone-handset"></i>
                  <h6>
                    <a href="tel:+61403732317">+61 403 732 317</a>
                  </h6>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-envelope"></i>
                  <h6>
                    <a href="mailto:tomlui2010@gmail.com">tomlui2010@gmail.com</a>
                  </h6>
                  <p>Send me your query anytime!</p>
                </div>
                <div className="info_item mt-4">
                  <div className="social_links">
                    <h6>Professional Profiles</h6>
                    <a
                      href="https://www.linkedin.com/in/thomaslouisc/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary btn-sm mr-2"
                    >
                      <i className="fa fa-linkedin"></i> LinkedIn
                    </a>
                    <a
                      href="https://github.com/tomlui2010"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-dark btn-sm"
                    >
                      <i className="fa fa-github"></i> GitHub
                    </a>
                    <a
                      href="https://medium.com/@tomlui2010"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-dark btn-sm"
                    >
                      <i className="fa fa-github"></i> Medium
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8 mx-auto">
              <div className="contact_form">
                <h3>Get In Touch</h3>
                <p className="mb-4">
                  Interested in discussing a project or professional opportunity? I'd love to
                  hear from you!
                </p>

                <form
                  className="row contact_form"
                  method="post"
                  id="contactForm"
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={values.name}
                        onChange={(e) => setValues((s) => ({ ...s, name: e.target.value }))}
                        aria-invalid={Boolean(errors.name)}
                      />
                      {errors.name ? (
                        <div className="text-danger small mt-1">{errors.name}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={values.email}
                        onChange={(e) => setValues((s) => ({ ...s, email: e.target.value }))}
                        aria-invalid={Boolean(errors.email)}
                      />
                      {errors.email ? (
                        <div className="text-danger small mt-1">{errors.email}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={values.subject}
                        onChange={(e) =>
                          setValues((s) => ({ ...s, subject: e.target.value }))
                        }
                        aria-invalid={Boolean(errors.subject)}
                      />
                      {errors.subject ? (
                        <div className="text-danger small mt-1">{errors.subject}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        rows={6}
                        placeholder="Message"
                        value={values.message}
                        onChange={(e) =>
                          setValues((s) => ({ ...s, message: e.target.value }))
                        }
                        aria-invalid={Boolean(errors.message)}
                      ></textarea>
                      {errors.message ? (
                        <div className="text-danger small mt-1">{errors.message}</div>
                      ) : null}
                    </div>
                  </div>

                  {status ? (
                    <div className="col-md-12">
                      <div
                        className={`alert ${
                          status.type === "success" ? "alert-success" : "alert-danger"
                        } mt-3 rounded-md shadow-sm`}
                        role="status"
                      >
                        {status.message}
                      </div>
                    </div>
                  ) : null}

                  <div className="col-md-12 text-right">
                    <button
                      type="submit"
                      className="primary_btn disabled:opacity-60"
                      disabled={submitting}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="footer_top flex-column">
                <div className="footer_logo">
                  <a href="#">
                    <img src="/img/logo.png" alt="" />
                  </a>
                  <h4>Follow Me</h4>
                </div>
                <div className="footer_social">
                  <a href="https://www.facebook.com/thomas.louis.925">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/tomlui2010">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thomaslouisc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/tomlui2010"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a href="mailto:tomlui2010@gmail.com" target="_blank" rel="noreferrer">
                    <i className="fa fa-google"></i>
                  </a>
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
    </>
  );
}
