import React from "react";

const NavBarComponent = ({ title }) => {
  return (
    <>
      <div className="container nav__title__main">
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default NavBarComponent;
