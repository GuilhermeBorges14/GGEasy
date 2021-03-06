import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link to="/" className={style.logo}>
          {" "}
          <Logo />
        </Link>
        {data ? (
          <Link to="/minhaconta" className={style.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={style.login}>
            {" "}
            Login / Cadastrar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
