import React from "react";
import "./recycleproductcard.css";
import Data from "../RecycleProduct/Data/Data";
import PlasticData from "./Data/PlasticProduct";
import Ewaste from "./Data/Ewaste";
import Paper from "./Data/Paper";
import Metal from "./Data/Metal";

const RecycleCard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col mt-2 bg-gray"
            style={{ backgroundColor: "rgb(23, 177, 113)" }}
          >
            <h3
              style={{
                lineHeight: "40px",
                marginLeft: "10px",
                color: "white",
                fontWeight: "600",
              }}
            >
              {" "}
              Recycle Products
            </h3>
          </div>
        </div>

        {/*  Glass section starts */}
        <div className="col text-start">
          <h4
            className="fw-normal fs-15 mt-3 mb-2 "
            style={{
              fontFamily: "monospace",
              marginBottom: "50px",
            }}
          >
            Glass
          </h4>
        </div>
        <div className="row">
          {Data.map((element1) => {
            const { image, name, detail } = element1;
            return (
              <>
                <div className="col-md-3 col-6 productcard">
                  <div
                    className="card mb-2"
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      height: "175px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      style={{ height: "100px", width: "80px" }}
                      src={image}
                      alt=""
                    />
                    <p
                      className="title  text-center fs-12 fw-bold mt-2 mb-1"
                      style={{
                        fontSize: "12px",
                        color: "black",
                        marginTop: "-5px",
                        marginBottom: "1px",
                      }}
                    >
                      {name}
                    </p>
                    <p
                      className=" description text-center"
                      style={{ marginTop: "15px" }}
                    >
                      {detail}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/*  Glass section ends */}

        {/* Plastic section starts */}
        <div className="col text-start">
          <h4
            className="fw-normal fs-15 mt-3 mb-2"
            style={{ fontFamily: "monospace" }}
          >
            Plastic
          </h4>
        </div>
        <div className="row">
          {PlasticData.map((items) => {
            const { image, name, price } = items;
            return (
              <>
                <div className="col-md-3 col-6 productcard">
                  <div
                    className="card mb-2"
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      height: "175px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      style={{ height: "100px", width: "80px" }}
                      src={image}
                      alt=""
                    />
                    <p
                      className="title  text-center fs-12 fw-bold mt-2 mb-1"
                      style={{
                        fontSize: "12px",
                        color: "black",
                        marginTop: "-5px",
                        marginBottom: "1px",
                      }}
                    >
                      {name}
                    </p>
                    <p
                      className=" description text-center"
                      style={{ marginTop: "15px" }}
                    >
                      {price}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/*  Plastic section ends */}

        {/* Ewaste section starts */}
        <div className="col text-start">
          <h4
            className="fw-normal fs-15 mt-3 mb-2"
            style={{ fontFamily: "monospace" }}
          >
            E-Waste
          </h4>
        </div>
        <div className="row">
          {Ewaste.map((items) => {
            const { image, name, price } = items;
            return (
              <>
                <div className="col-md-3 col-6 productcard">
                  <div
                    className="card mb-2"
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      height: "175px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      style={{ height: "100px", width: "80px" }}
                      src={image}
                      alt=""
                    />
                    <p
                      className="title  text-center fs-12 fw-bold mt-2 mb-1"
                      style={{
                        fontSize: "12px",
                        color: "black",
                        marginTop: "-5px",
                        marginBottom: "1px",
                      }}
                    >
                      {name}
                    </p>
                    <p
                      className=" description text-center"
                      style={{ marginTop: "15px" }}
                    >
                      {price}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/*  Ewaste section ends */}
        {/* Paper section starts */}
        <div className="col text-start">
          <h4
            className="fw-normal fs-15 mt-3 mb-2"
            style={{ fontFamily: "monospace" }}
          >
            Paper
          </h4>
        </div>
        <div className="row">
          {Paper.map((items) => {
            const { image, name, price } = items;
            return (
              <>
                <div className="col-md-3 col-6 productcard">
                  <div
                    className="card mb-2"
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      height: "175px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      style={{ height: "100px", width: "80px" }}
                      src={image}
                      alt=""
                    />
                    <p
                      className="title  text-center fs-12 fw-bold mt-2 mb-1"
                      style={{
                        fontSize: "12px",
                        color: "black",
                        marginTop: "-5px",
                        marginBottom: "1px",
                      }}
                    >
                      {name}
                    </p>
                    <p
                      className=" description text-center"
                      style={{ marginTop: "15px" }}
                    >
                      {price}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/*  Paper section ends */}
        {/* Metal section starts */}
        <div className="col text-start">
          <h4
            className="fw-normal fs-15 mt-3 mb-2"
            style={{ fontFamily: "monospace" }}
          >
            Metal
          </h4>
        </div>
        <div className="row">
          {Metal.map((items) => {
            const { image, name, price } = items;
            return (
              <>
                <div className="col-md-3 col-6 productcard">
                  <div
                    className="card mb-2"
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      height: "175px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      style={{ height: "100px", width: "80px" }}
                      src={image}
                      alt=""
                    />
                    <p
                      className="title  text-center fs-12 fw-bold mt-2 mb-1"
                      style={{
                        fontSize: "12px",
                        color: "black",
                        marginTop: "-5px",
                        marginBottom: "1px",
                      }}
                    >
                      {name}
                    </p>
                    <p
                      className=" description text-center"
                      style={{ marginTop: "15px" }}
                    >
                      {price}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/*  Metal section ends */}
      </div>
    </>
  );
};

export default RecycleCard;
