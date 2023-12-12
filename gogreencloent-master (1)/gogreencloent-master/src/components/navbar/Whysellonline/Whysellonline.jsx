import React from "react";
import "./whysellonline.css";
const Whysellonline = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* 1 section starts */}

          <div className="col mt-2">
            <div className="card-body">
              <p
                className="card-text text-center fw-bold fs-15"
                style={{ color: " #23c814" }}
              >
                Growth in the online retail market.
              </p>
              <p style={{ textAlign: "left" }}>
                Witnessing tremendous growth for the past 5 years, retailers are
                moving towards online selling.
              </p>
              <i className="fa-solid fa-square-check "></i>
              <span style={{ fontSize: "12px" }}> Avoid huge investments.</span>
              <br />
              <i className="fa-solid fa-square-check "></i>
              <span style={{ fontSize: "12px" }}>
                Large customer base to sell anywhere..
              </span>
            </div>
          </div>

          {/* 1 section ends */}

          {/* 2 section starts */}

          <div className="col mt-2">
            <div className="card-body">
              <p
                className="card-text text-center fw-bold fs-15"
                style={{ color: " #23c814" }}
              >
                Get Orders Across Nepal.
              </p>
              <p style={{ textAlign: "left" }}>
                Receive orders from every part of the country and follow the
                simple steps to fulfill the orders.
              </p>
              <i className="fa-solid fa-square-check "></i>
              <span style={{ fontSize: "12px" }}> Simple dashboard.</span>
              <br />
              <i className="fa-solid fa-square-check  "></i>
              <span style={{ fontSize: "12px" }}>
                {" "}
                Sale events, advertising and promotions.
              </span>
            </div>
          </div>

          {/* 2 section ends */}

          {/* 3 section starts */}

          <div className="col mt-2">
            <div className="card-body">
              <p
                className="card-text text-center fw-bold fs-15"
                style={{ color: " #23c814" }}
              >
                Ship with ease
              </p>
              <p style={{ textAlign: "left" }}>
                Enjoy easy pick-up and delivery across Nepal.
              </p>
              <i className="fa-solid fa-square-check "></i>
              <span style={{ fontSize: "12px" }}>
                {" "}
                Efficient pick-up network.
              </span>
              <br />
              <i className="fa-solid fa-square-check "></i>
              <span style={{ fontSize: "12px" }}>
                {" "}
                Professional packaging support.
              </span>
            </div>
          </div>

          {/* 3 section ends */}
          {/* 4 section starts */}

          <div className="col mt-2">
            <div className="card-body">
              <p
                className="card-text text-center fw-bold fs-15"
                style={{ color: " #23c814" }}
              >
                Earn big
              </p>
              <p style={{ textAlign: "left" }}>
                Our payments process is the fastest in the industry - get your
                payments in as little as 7 days of sales.
              </p>
              <i className="fa-solid fa-square-check  "></i>
              <span style={{ fontSize: "12px" }}>
                {" "}
                Fastest payment settlement
              </span>
              <br />
              <i className="fa-solid fa-square-check "></i>
              <span style={{ fontSize: "12px" }}>
                {" "}
                Detailed reports to track your payments.
              </span>
            </div>
          </div>

          {/* 4 section ends */}
        </div>
      </div>
    </>
  );
};

export default Whysellonline;
