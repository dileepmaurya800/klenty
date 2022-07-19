import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand m-0">
              <img
                src="https://www.klenty.com/a-6957cb0e/assets/images/automation/footer-logo.png"
                alt="klenty"
                style={{ width: "20%" }}
              />
            </a>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link href="/">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#05034E", fontWeight: "600" }}
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link href="/platform">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#05034E", fontWeight: "600" }}
                  >
                    Platform
                  </a>
                </li>
              </Link>
              <Link href="/pricing">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#05034E", fontWeight: "600" }}
                  >
                    Pricing
                  </a>
                </li>
              </Link>
              <Link href="/acceleration">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#05034E", fontWeight: "600" }}
                  >
                    Acceleration
                  </a>
                </li>
              </Link>
              <Link href="/resources">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#05034E", fontWeight: "600" }}
                  >
                    Resources
                  </a>
                </li>
              </Link>
            </ul>

            <button className="btn btn-outline-success m-1" type="button">
              Schedule Demo
            </button>

            <button className="btn btn-outline-success m-1" type="button">
              Free Trail
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
