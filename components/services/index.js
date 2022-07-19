import React from "react";

const Services = () => {
  return (
    <section className="my-5" style={{ background: "rgb(242,242,253)" }}>
      <div className="container pb-5 pt-5">
        <div className="row text-center p-3">
          <h2 style={{ fontWeight: "800", color: "#120155" }}>
            CRM Accelerate
          </h2>
          <p style={{ fontSize: "1rem" }}>
            Everything CRM Integrations was supposed to be. And more.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 my-3">
            <div
              className="card p-3"
              style={{
                borderRadius: "15px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div className="card-body" style={{ fontSize: "1rem" }}>
                <img
                  className="my-3"
                  src="/assets/Group-1006-3.png"
                  alt="image"
                />

                <h5
                  className="card-title"
                  style={{ fontWeight: 700, color: "#120155" }}
                >
                  Never update your contacts manually
                </h5>
                <p className="card-text">
                  Any contact you add in CRM gets updated automatically in
                  Klenty. Set up Triggers to drive leads from Klenty back into
                  the CRM. Save hours everyday to focus on critical activities
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div
              className="card p-3"
              style={{
                borderRadius: "15px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div className="card-body" style={{ fontSize: "1rem" }}>
                <img
                  className="my-3"
                  src="/assets/Group-1006-4.png"
                  alt="image"
                />
                <h5
                  className="card-title"
                  style={{ fontWeight: 700, color: "#120155" }}
                >
                  Engage instantly with prospects who show intent
                </h5>
                <p className="card-text">
                  Auto-sync email engagement data like opens, clicks and replies
                  from Klenty right into your CRM. Get notified immediately.
                  Followup without skipping a beat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div
              className="card p-3"
              style={{
                borderRadius: "15px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div className="card-body" style={{ fontSize: "1rem" }}>
                <img
                  className="my-3"
                  src="/assets/Group-1006-5.png"
                  alt="image"
                />

                <h5
                  className="card-title"
                  style={{ fontWeight: 700, color: "#120155" }}
                >
                  Outreach without leaving your
                  <br /> CRM
                </h5>
                <p className="card-text">
                  Engage with prospects straight from your CRM.Book meetings
                  using Klenty- without ever logging into Klenty. No more
                  switching screens to execute sales outreach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
