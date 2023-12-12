import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../../Images/PageNotFound.svg";
import "./PageNotFound.css";
import AddLink from "@mui/icons-material/ArrowRightAltOutlined";

const PageNotFound = () => {
  const { pathname } = useLocation();
  return (
    <>
      <h1
        style={{
          fontSize: "25px",
          margin: "20px auto",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Sorry '{pathname.slice(1)}' Route Is Not Found
      </h1>
      <h1
        style={{
          fontSize: "25px",
          margin: "20px auto",
          textAlign: "center",
          fontWeight: "bold",
          color: "black",
        }}
      >
        <Link
          style={{
            fontSize: "25px",
            margin: "20px auto",
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
          }}
          to="/"
        >
          <AddLink /> Go To Home
        </Link>
      </h1>
      <div
        className="container"
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Image}
          alt=""
          srcset=""
          className="page__not__found__image"
          style={{ margin: "0px auto" }}
        />
      </div>
    </>
  );
};

export default PageNotFound;
