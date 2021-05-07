import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { ReactComponent as Logo } from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link to="/" className={style.logo}>
          {" "}
          <Logo />
        </Link>
        <Link to="/login" className={style.login}>
          {" "}
          Login / Cadastrar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
