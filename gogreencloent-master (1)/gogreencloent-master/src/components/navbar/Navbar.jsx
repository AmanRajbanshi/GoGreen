import React, { useEffect, useState, useContext } from "react";
import Logo from "../../Images/Logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import NavBarComponent from "./NavBarComponent";
import { cartContext } from "../../context/AericaItemsContext";
const Navbar = () => {
  const [userInfo1, setUserInfo1] = useState({});
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  const { items } = useContext(cartContext);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo1(userInfo);
  }, []);

  return (
    <header className="text-gray-600 body-font main__header">
      <div className="container mx-auto flex p-2 flex-col md:flex-row items-center">
        <nav className="flex lg:w-full flex-wrap items-center text-base md:ml-auto  px-5">
          <Link
            to="/"
            className="mr-5 hover:text-gray-900 nav__list"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            Home
          </Link>

          {userInfo1 ? (
            userInfo1.role === "Seller" ? (
              <Link
                to="/createpost"
                className="mr-5 hover:text-gray-900 nav__list"
                style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
              >
                Create
              </Link>
            ) : null
          ) : null}
          <Link
            to="/contact"
            className="mr-5 hover:text-gray-900 nav__list"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="mr-5 hover:text-gray-900 nav__list"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            Blog
          </Link>
          <Link
            to="/profile"
            className="mr-5 hover:text-gray-900 nav__list"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            Profile
          </Link>
          <Link
            to="/aerika"
            className="mr-5 hover:text-gray-900 nav__list"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            ArecaNut
          </Link>

          {userInfo1 ? (
            userInfo1.role !== "Admin" ? (
              <Link
                to="/aericacart"
                className="hover:text-gray-900 nav__list areka"
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                <i className="fas fa-shopping-cart"></i>
                <span class="w3-badge" style={{ marginLeft: "10px" }}>
                  <h6 style={{ fontSize: "15px" }}>
                    {items ? items.length : null}
                  </h6>
                </span>
              </Link>
            ) : null
          ) : null}

          {userInfo1 ? (
            userInfo1.role === "Admin" ? (
              <Link
                to="/dashboard"
                className="hover:text-gray-900 nav__list"
                style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
              >
                Dashboard
              </Link>
            ) : null
          ) : null}
        </nav>
        <Link
          to="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-left mb-1 md:mb-0 "
          style={{ cursor: "pointer" }}
        >
          <img src={Logo} alt="" srcset="" />
        </Link>
        <div className="hamburger__main">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 logo__main">
          {userInfo1 ? (
            <>
              <h1
                className="nav__button"
                style={{
                  textAlign: "left",
                  fontWeight: "500",
                  marginTop: "20px",
                  marginLeft: "-20px",
                  padding: "10px",
                  border: "1px solid #17B171",
                  borderRadius: "15px",
                  color: "#17B171",
                  backgroundColor: "#ebeff5",
                  cursor: "pointer",
                }}
              >
                {userInfo1 ? userInfo1.role : null}
              </h1>
              <a href="/">
                <button
                  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 ml-5 md:mt-0 nav__button"
                  style={{ color: "#17B171" }}
                  onClick={() => localStorage.removeItem("userInfo")}
                >
                  Logout
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
              </a>
            </>
          ) : (
            <Link to="/signin">
              <button
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 nav__button"
                style={{ color: "#22c514" }}
              >
                SignIn
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
          )}
        </div>
      </div>
      {isOpen && (
        <>
          <Link
            to="/"
            className="mr-1 hover:text-gray-900"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            {" "}
            <NavBarComponent title="Home" />
          </Link>
          <Link
            to="/contact"
            className="mr-1 hover:text-gray-900 "
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            <NavBarComponent title="Contact" />
          </Link>
          {userInfo1 ? (
            userInfo1.role === "Seller" ? (
              <Link
                to="/createpost"
                className="mr-1 hover:text-gray-900 "
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  color: "black",
                }}
              >
                <NavBarComponent title="Create" />
              </Link>
            ) : null
          ) : null}

          <Link
            to="/blog"
            className="mr-5 hover:text-gray-900 nav__list"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            <NavBarComponent title="Blog" />
          </Link>
        </>
      )}
    </header>
  );
};

export default Navbar;
