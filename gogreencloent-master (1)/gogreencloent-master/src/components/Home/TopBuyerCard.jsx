import React, { useEffect, useState } from "react";
import "./Top.css";
import { Link } from "react-router-dom";
import axios from "axios";

const TopBuyerCard = ({
  product_image,
  id,
  sales_id,
  product_desc,
  product_price,
  product_amount,
  location,
  posted_date,
  rank,
}) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(rank);

  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/finduser/${id}`
        );
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  return (
    <>
      <h1></h1>
      <article style={{ borderRadius: "10px" }} className="card">
        <header
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
          className="card__thumb"
        >
          <a href="#top">
            <img
              alt=""
              src="https://369bottles.com/wp-content/uploads/2021/04/plastic-water-bottles-pollution-ocean-scaled.jpg"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </a>
        </header>
        <date className="card__rank">
          <span className="card__rank__position">#{rank}</span>
        </date>

        <div className="card__body">
          <div className="card__subtitle">
            <img
              src={user ? user.pic : null}
              alt=""
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                position: "absolute",
                marginTop: "-8px",
              }}
            />
            <Link to={`/user-profile/${id ? id : null}`}>
              <span style={{ marginLeft: "45px" }}>
                @{user ? user.name : null}
              </span>
            </Link>
          </div>

          <p className="card__description">
            <span style={{ fontWeight: "600", margin: "10px 0px" }}>Price</span>
            :Rs.{product_price} <br />
            <span style={{ fontWeight: "600", margin: "10px 0px" }}>
              Quantity
            </span>
            :{product_amount} Kg <br />
            <span style={{ fontWeight: "600", margin: "10px 0px" }}>
              Address
            </span>
            :{location} <br />
          </p>
        </div>

        <footer className="card__footer">{posted_date}</footer>
      </article>
      {userInfo ? (
        userInfo.role === "Buyer" ? (
          <Link to={`/cart/${sales_id}`}>
            <button
              className="inline-flex items-center bg-gray-100 border-2 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 nav__button"
              style={{
                color: "#22c514",
                fontSize: "20px",
                width: "170px",
                height: "40px",
                margin: "20px 0px",
              }}
            >
              <h1>View Info</h1>
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
            </button>
          </Link>
        ) : null
      ) : null}
    </>
  );
};

export default TopBuyerCard;
