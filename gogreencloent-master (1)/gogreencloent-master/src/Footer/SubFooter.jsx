import React from "react";
import { Link } from "react-router-dom";
import "./SubFooter.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const SubFooter = ({
  heading,
  link1,
  linkto1,
  link2,
  link3,
  link4,
  link5,
  link6,
  linkto2,
  linkto3,
  linkto4,
  linkto5,
  linkto6,
}) => {
  // const [showIcon, setShowIcon] = useState(false);
  console.log(link2);
  return (
    <div className=" w-full px-4 main__sub__footer " style={{ color: "white" }}>
      <h2
        className="title-font font-xl text-gray-900 tracking-widest text-sm mb-3"
        style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
      >
        {heading ? heading.toUpperCase() : null}
      </h2>
      <nav className="list-none mb-10">
        {link1 !== undefined ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "none" }}>
              <ArrowRightAltIcon />
            </span>
            <li style={{ margin: "5px 5px" }}>
              <Link to={`/${linkto1}`} className="footer__links">
                {link1}
              </Link>
            </li>
          </div>
        ) : null}

        {link2 !== undefined ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "none" }}>
              <ArrowRightAltIcon />
            </span>
            <li style={{ margin: "5px 0px" }}>
              <Link to={`/${linkto2}`} className="footer__links">
                {link2}
              </Link>
            </li>
          </div>
        ) : null}

        {link3 !== undefined ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "none" }}>
              <ArrowRightAltIcon />
            </span>
            <li style={{ margin: "5px 0px" }}>
              <Link to={`/${linkto3}`} className="footer__links">
                {link3}
              </Link>
            </li>
          </div>
        ) : null}

        {link4 !== undefined ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "none" }}>
              <ArrowRightAltIcon />
            </span>
            <li style={{ margin: "5px 0px" }}>
              <Link to={`/${linkto4}`} className="footer__links">
                {link4}
              </Link>
            </li>
          </div>
        ) : null}

        {link5 !== undefined ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "none" }}>
              <ArrowRightAltIcon />
            </span>
            <li style={{ margin: "5px 0px" }}>
              <Link to={`/${linkto5}`} className="footer__links">
                {link5}
              </Link>
            </li>
          </div>
        ) : null}
        {link6 !== undefined ? (
          <div
            className="container-fluid main__footer"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "-30px",
              alignItems: "center",
            }}
          >
            {" "}
            <span style={{ display: "none" }}>
              <ArrowRightAltIcon />
            </span>
            <li style={{ margin: "5px 0px" }}>
              <Link to={`/${linkto6}`} className="footer__links">
                {link6}
              </Link>
            </li>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default SubFooter;
