import React from "react";
import style from "./ListItem.module.css";

const ListItem = ({ item, setModal }) => {
  function modal() {
    setModal(item);
  }

  return (
    <li className={style.card} onClick={modal}>
      <img src={item.src} alt={item.title} />
      <h3 className={style.title}>{item.title}</h3>
      <p className={style.price}>R$ {item.preco}</p>
    </li>
  );
};

export default ListItem;
