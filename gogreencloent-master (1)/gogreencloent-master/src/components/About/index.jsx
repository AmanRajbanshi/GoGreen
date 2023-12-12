import React from "react";
import "./index.css";
import Typewriter from "typewriter-effect";
import Whypms from "../NavbarOfPms/Whypms/Whypms";
import Whysellonline from "../NavbarOfPms/Whysellonline/Whysellonline";
import HowToRegister from "../NavbarOfPms/Howtoregister/HowToRegister";
import Whygogreen from "../NavbarOfPms/Whygogreen/Whygogreen";

const About = () => {
  return (
    <>
      <div className="container">
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
              strings: ["About Us"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>

      <Whygogreen />
      <Whypms />
      <Whysellonline />
      <HowToRegister />
    </>
  );
};

export default About;
