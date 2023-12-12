import React, { useEffect } from "react";
import Top3Buy from "./Top3Buy";
import Top3Sell from "./Top3Sell";
import WhyPMS from "./WhyPMS";
import Hero from "../hero/Hero";
import toast from "react-hot-toast";
import TopSellers from "../TopSellers/TopSellers";
import Navbar2 from "./../Faq/Navbar2/Navbar2";
import { Link } from "react-router-dom";

const Home = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    if (userInfo) {
      toast.success(`Welcome back ${userInfo && userInfo.name}`);
    } else {
      return 1;
    }
  });
  return (
    <>
      <Hero />
      <WhyPMS />
      <Navbar2 />

      <Top3Sell />
      <Top3Buy />
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link to="all-sales-item">
          <button
            className="inline-flex items-center bg-gray-100 border-2 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 nav__button"
            style={{
              color: "#22c514",
              fontSize: "20px",
              width: "170px",
              height: "40px",
              margin: "20px auto",
            }}
          >
            <h1>Load More</h1>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>{" "}
        </Link>
      </div>
      <TopSellers />
    </>
  );
};

export default Home;
