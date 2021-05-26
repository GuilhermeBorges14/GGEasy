import React from "react";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import style from "./PhotoContent.module.css";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div className={style.photo}>
      <div className={style.img}>
        <img src={photo.src} alt={photo.title}></img>
      </div>
      <div className={style.details}>
        <div>
          <p className={style.author}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={style.access}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={style.detailsList}>
            <li>{photo.nome_jogo}</li>
            <li>R$ {photo.preco}</li>
            <li>{photo.contato}</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
