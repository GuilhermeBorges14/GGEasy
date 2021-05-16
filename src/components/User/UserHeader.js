import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import style from "./UserHeader.module.css";
import { useLocation } from "react-router";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname);
    if ("/minhaconta" === location.pathname) setTitle("Minha Conta");
    else if ("/minhaconta/estatisticas" === location.pathname)
      setTitle("Estatísticas");
    else if ("/minhaconta/item" === location.pathname) setTitle("Postar item");
    else setTitle("Minha Conta");
  }, [location]);

  return (
    <header className={style.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
