import React, { useEffect, useState } from "react";
import "./Aerika.css";
import axios from "axios";
import AericaCard from "./AericaCard";
import Spinner from "../Spinner";
import Typewriter from "typewriter-effect";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Aerika = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [aerikaItems, setAerikaItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetch, setFetch] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/aerika/getall"
      );
      console.log(data);
      try {
        setAerikaItems(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchItems();
  }, [fetch]);

  return (
    <>
      {loading && <Spinner />}

      <h1 className="mainservices__title">
        <Typewriter
          options={{
            strings: ["Arecanut Utensils"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="container p-5">
        <div className="row">
          {aerikaItems
            ? aerikaItems.map((value) => {
                return (
                  <>
                    <AericaCard value={value} setFetch={setFetch} />
                  </>
                );
              })
            : null}
        </div>
      </div>

      {userInfo ? (
        userInfo.role === "Admin" ? (
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-10"></div>
              <div className="col-md-4 col-sm-10">
                <div
                  className="card cart__card"
                  style={{
                    width: "19rem",
                    margin: "20px auto",
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      backgroundColor: "#F9F9F9",
                      borderBottom: "2px solid #22C514",
                      borderLeft: "2px solid #22C514",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Link to="/add-aerika">
                      <div className="container ">
                        <AddIcon className="add__icon" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-10"></div>
            </div>
          </div>
        ) : null
      ) : null}
    </>
  );
};

export default Aerika;
