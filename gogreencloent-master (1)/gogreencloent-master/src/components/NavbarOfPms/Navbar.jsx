import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <ul class="nav nav-pills nav-fill">
              <li class="nav-item">
                <Link
                  class="nav-link"
                  style={{ fontSize: "25px" }}
                  to="/whysellonline"
                >
                  WHY SELL ONLINE
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link "
                  style={{ fontSize: "25px" }}
                  to="/whypms"
                >
                  WHY PMS
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  style={{ fontSize: "25px" }}
                  to="/whygogreen"
                >
                  WHY GO GREEN
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  style={{ fontSize: "25px" }}
                  to="/howtoregister"
                >
                  How to Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
