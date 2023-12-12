import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetStarted from "./Getting Started/GetStarted";
import Listing from "./Listing/Listing";
import PaymentAndPricing from "./PricingAndPayment/PriceingAndPayment";
import OrderManagementAndShipping from "./OrderManagementAndShipping/OrderManagementAndShipping";
import { FlashAuto } from "@mui/icons-material";
import "./Navbar.css";

const Navbar2 = () => {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);

  return (
    <>
      <div className="container " style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col">
            <ul className="nav nav-pills nav-fill">
              <li
                className={a ? "nav-item checked__main" : "nav-item"}
                style={{ fontSize: "25px", cursor: "pointer" }}
                onClick={() => {
                  setB(false);
                  setA(!a);
                  setC(false);
                  setD(false);
                }}
              >
                Get Started
              </li>

              <li className="nav-item">
                <li
                  className={b ? "nav-item checked__main" : "nav-item"}
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={() => {
                    setB(!b);
                    setA(false);
                    setC(false);
                    setD(false);
                  }}
                >
                  Listing
                </li>
              </li>
              <li className="nav-item">
                <li
                  className={c ? "nav-item checked__main" : "nav-item"}
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={() => {
                    setB(false);
                    setA(false);
                    setC(!c);
                    setD(false);
                  }}
                >
                  Payment And Pricing
                </li>
              </li>
              <li className="nav-item">
                <li
                  className={d ? "nav-item checked__main" : "nav-item"}
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={() => {
                    setB(false);
                    setA(false);
                    setC(false);
                    setD(!d);
                  }}
                >
                  Order Management
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {a && <GetStarted />}
      {b && <Listing />}
      {c && <PaymentAndPricing />}
      {d && <OrderManagementAndShipping />}
    </>
  );
};

export default Navbar2;
