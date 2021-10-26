import React from "react";
import "./Navbar.scss";
import Language from "../Language/Language";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <img src="img/logo.png" alt="brand logo" className="nav-logo" />
        <div className="navBtn">
          <div className="navBtn-burger"></div>
        </div>
      </div>
      {/* <Language /> */}
    </nav>
  );
};

export default Navbar;
