export default function ArtifipediaEmbed() {
  return (
    <section className="artifipedia_area section_gap_bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <div className="main_title">
              <h2>The Map of AI</h2>
              <p>
                An interactive landscape of artificial intelligence — explore tools,
                concepts, and connections via{" "}
                <a
                  href="https://artifipedia.com"
                  target="_blank"
                  rel="noreferrer"
                  className="artifipedia_area__link"
                >
                  Artifipedia
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="artifipedia_area__frame-wrap">
              <iframe
                src="https://artifipedia.com/embed"
                width="100%"
                height="680"
                className="artifipedia_area__iframe"
                title="The map of AI — Artifipedia"
                loading="lazy"
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
