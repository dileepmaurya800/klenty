import React from "react";
import { Col, Row, Carousel, Card } from "antd";
import "antd/dist/antd.css";
import { data } from "../../pages/data";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const b = {
  display: "inline-block",
  width: "100px",
  height: "100px",
};

const Testimonial = () => {
  const testimonialData = data.testimonial;

  return (
    <>
      <section className="my-5">
        <div className="container pb-5 pt-5">
          <div className="row text-center p-3">
            <h2 style={{ fontWeight: "800", color: "#120155" }}>
              Happy Customers
            </h2>
          </div>
          <div className="row">
            <Carousel autoplay>
              <Col span={24}>
                <Row>
                  <Col span={12}>
                    <div className="card border-0">
                      <div className="card-body">
                        <img src="/assets/Vector.png" alt="Vector" />
                        <blockquote className="blockquote mb-0">
                          <p>
                            From someone who is relatively new to sales and lead
                            generating, Klenty was a highly effective and
                            simple-to-use tool that allowed me to quickly
                            generate leads in a genuine and customisable manner
                          </p>
                        </blockquote>
                        <div className="d-flex mt-5">
                          <span className={b} style={{ padding: "15px" }}>
                            <img src="/assets/double-logo.png" alt="logo" />
                          </span>
                          <span
                            className={b}
                            style={{ padding: "10px", borderLeft: "1px solid" }}
                          >
                            <h5>Adam Weinger</h5>
                            <h6>Persident, Double The Donation</h6>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={12} type="flex" align="middle">
                    <img src="/assets/Group-1008.png" alt="Adam Weinger" />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row>
                  <Col span={12}>
                    <div className="card border-0">
                      <div className="card-body">
                        <img src="/assets/Vector.png" alt="Vector" />
                        <blockquote className="blockquote mb-0">
                          <p>
                            It changed our business. Klenty allowed our outbound
                            sales team to leverage their time and skills.
                          </p>
                        </blockquote>
                        <div className="d-flex mt-5">
                          <span className={b} style={{ padding: "15px" }}>
                            <img src="/assets/jump-logo.png" alt="logo" />
                          </span>
                          <span
                            className={b}
                            style={{ padding: "10px", borderLeft: "1px solid" }}
                          >
                            <h5>Sam W</h5>
                            <h6>Head of Demand Genration, Jump</h6>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={12} type="flex" align="middle">
                    <img src="/assets/sam.png" alt="Sam" />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row>
                  <Col span={12}>
                    <div className="card border-0">
                      <div className="card-body">
                        <img src="/assets/Vector.png" alt="Vector" />
                        <blockquote className="blockquote mb-0">
                          <p>
                            From someone who is relatively new to sales and lead
                            generating, Klenty was a highly effective and
                            simple-to-use tool that allowed me to quickly
                            generate leads in a genuine and customisable manner.
                          </p>
                        </blockquote>
                        <div className="d-flex mt-5">
                          <span className={b} style={{ padding: "15px" }}>
                            <img src="/assets/red-eye.png" alt="logo" />
                          </span>
                          <span
                            className={b}
                            style={{ padding: "10px", borderLeft: "1px solid" }}
                          >
                            <h5>Gavin Tye</h5>
                            <h6>Salse Director, Red Eye</h6>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={12} type="flex" align="middle">
                    <img src="/assets/gavin.png" alt="Adam Weinger" />
                  </Col>
                </Row>
              </Col>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
