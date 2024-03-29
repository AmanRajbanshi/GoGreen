import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TopSellers.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const TopSellers = () => {
  const [user1, setUser1] = useState({});
  const [user2, setUser2] = useState({});
  const [user3, setUser3] = useState({});

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/top-sellers"
      );
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/finduser/${
            data ? data[0].user_id : null
          }`
        );
        setUser1(response.data);

        const response1 = await axios.get(
          `http://localhost:3000/api/v1/finduser/${
            data ? data[1].user_id : null
          }`
        );
        setUser2(response1.data);

        const response2 = await axios.get(
          `http://localhost:3000/api/v1/finduser/${
            data ? data[2].user_id : null
          }`
        );
        setUser3(response2.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      <h1
        className="PMS__title__main"
        style={{
          color: "rgb(23, 177, 113)",
          fontSize: "36px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Typewriter
          options={{
            strings: ["Top Sellers"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="container" style={{ marginBottom: "50px" }}>
        <div className="row">
          <div className="col-md-4 col-9 main__col__sellers">
            <Link to={`/user-profile/${user1 ? user1._id : null}`}>
              <div className="container sellers__div">
                <img
                  src={user1 ? user1.pic : null}
                  alt=""
                  srcset=""
                  style={{
                    width: "60%",
                    height: "200px",
                    borderRadius: "50%",
                    paddingTop: "10px",
                    margin: "0px auto",
                    textDecoration: "none",
                  }}
                />
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "Bold",
                    textAlign: "center",
                  }}
                >
                  {user1 ? user1.name : null}
                </h1>
                <h1
                  style={{
                    fontSize: "20px",

                    textAlign: "center",
                  }}
                >
                  {user1 ? user1.email : null}
                </h1>
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-9 main__col__sellers ">
            <Link to={`/user-profile/${user2 ? user2._id : null}`}>
              <div className="container sellers__div">
                <img
                  src={user2 ? user2.pic : null}
                  alt=""
                  srcset=""
                  style={{
                    width: "60%",
                    height: "200px",
                    borderRadius: "50%",
                    paddingTop: "10px",
                    margin: "0px auto",
                  }}
                />
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "Bold",
                    textAlign: "center",
                  }}
                >
                  {user2 ? user2.name : null}
                </h1>
                <h1
                  style={{
                    fontSize: "20px",

                    textAlign: "center",
                  }}
                >
                  {user2 ? user2.email : null}
                </h1>
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-9 main__col__sellers ">
            <Link to={`/user-profile/${user3 ? user3._id : null}`}>
              <div className="container sellers__div">
                <img
                  src={user3 ? user3.pic : null}
                  alt=""
                  srcset=""
                  style={{
                    width: "60%",
                    height: "200px",
                    borderRadius: "50%",
                    paddingTop: "10px",
                    margin: "0px auto",
                  }}
                />
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "Bold",
                    textAlign: "center",
                  }}
                >
                  {user3 ? user3.name : null}
                </h1>
                <h1
                  style={{
                    fontSize: "20px",

                    textAlign: "center",
                  }}
                >
                  {user3 ? user3.email : null}
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSellers;
