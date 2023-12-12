import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import "./Footer.css";
import SubFooter from "./SubFooter";

const Footer = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const user_id = userInfo ? userInfo._id : null;
  const email = userInfo ? userInfo.email : null;
  const [email1, setEmail1] = useState(email);
  const handleClick = async () => {
    if (email !== "" || user_id !== "") {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/v1/newsletter",
          { user_id, email }
        );
        console.log(data);
        toast.success("Newsletter Signup Successfull");
        setEmail1("");
      } catch (error) {
        toast.error(error.response.data);
      }
    } else {
      toast.error("Not Allowed");
    }
  };

  return (
    <>
      <div
        className="container-fluid mt-5 "
        style={{ borderLeftColor: "white", backgroundColor: "#2C398D" }}
      >
        <div className="container mt-10" style={{ marginTop: "30px" }}>
          <div className="row">
            <div className="col-md-3 col-10" style={{ marginTop: "30px" }}>
              <SubFooter
                heading="Services"
                link1="Register"
                linkto1="signup"
                link2=" Blog"
                linkto2="blog"
                link3="Profile"
                linkto3="profile"
                link4="Login"
                linkto4="signin"
              />
            </div>
            <div className="col-md-3 col-10" style={{ marginTop: "30px" }}>
              <SubFooter
                heading="Important Links"
                link1="Contact"
                linkto1="contact"
                link2=" Aerika"
                linkto2="aerika"
                link3="All Sales Item"
                linkto3="allsalesitem"
                link4="About"
                linkto4="about"
              />{" "}
            </div>
            <div className="col-md-3 col-10" style={{ marginTop: "30px" }}>
              {" "}
              <SubFooter
                heading="FAQs"
                link1="Get Started"
                linkto1=""
                link2="Listing"
                linkto2=""
                link3="Pricing And Payment"
                linkto3=""
                link4="Order Management"
                linkto4=""
              />{" "}
            </div>
            <div className="col-md-3 col-10" style={{ marginTop: "30px" }}>
              {" "}
              <SubFooter
                heading="Contact"
                link1="gogreen@gmail.com"
                linkto1="gogreen@gmail.com"
              />{" "}
            </div>
          </div>
        </div>

        <footer className="page-footer font-small special-color-dark pt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4"></div>{" "}
              <div className="col-md-4 mb-4">
                {userInfo ? (
                  <>
                    <form className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Your email"
                        aria-label="Your email"
                        aria-describedby="basic-addon2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div
                        style={{
                          display:
                            '"flex",justifyContent:"center",textAlign:"center"}}',
                        }}
                        className="input-group-append"
                      >
                        <button
                          className="btn btn-sm btn-outline-white ml-5 my-0 fs-12 subscribebtn"
                          type="button"
                          onClick={handleClick}
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </>
                ) : null}
              </div>
              <div className="col-md-4 mb-4"></div>
            </div>
          </div>
          <div
            className="footer-copyright text-center py-3"
            style={{ color: "white" }}
          >
            © 2022 Copyright :<span> Developed</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
