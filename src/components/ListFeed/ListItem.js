import React from "react";
import Image from "../Helpers/Image";
import style from "./ListItem.module.css";

const ListItem = ({ photo, setModal }) => {
  function modal() {
    setModal(photo);
  }

  return (
    <li className={style.card} onClick={modal}>
      <Image src={photo.src} alt={photo.title} />
      <h3 className={style.title}>{photo.title}</h3>
      <p className={style.price}>R$ {photo.preco}</p>
    </li>
  );
};

export default ListItem;
