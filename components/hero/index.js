import React from "react";

const Hero = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 style={{ fontWeight: "800", color: "#120155" }}>
              Don't just integrate <br />
              <span style={{ color: "#5856CE" }}>Accelerate your CRM</span>
            </h2>
            <p
              style={{ fontSize: "18px", lineHeight: "30px", color: "#343434" }}
            >
              Use Klenty to execute multi-channel sales outreach. Send
              personalized emails and automate your follow-ups at scale with
              calls and LinkedIn tasks.
            </p>
            <a
              href="/"
              className="btn btn-primary"
              style={{ background: "#5856CE" }}
            >
              GET STARTED
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/assets/Group-1006.png"
              alt="image"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
