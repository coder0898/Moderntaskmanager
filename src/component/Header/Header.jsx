import React from "react";
import reactLogo from "../../assets/react.svg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <img src={reactLogo} alt="404notfound" />
        <h1>Todo Application ReactJS</h1>
      </header>
    </>
  );
};

export default Header;
