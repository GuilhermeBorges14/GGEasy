import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Image from "../Helpers/Image";
import PhotoComments from "./PhotoComments";
import style from "./PhotoContent.module.css";
import PhotoDelete from "./PhotoDelete";

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;
  return (
    <div className={`${style.photo} ${single ? style.single : ""}`}>
      <div className={style.img}>
        <Image src={photo.src} alt={photo.title} className={style.imageSize} />
      </div>
      <div className={style.details}>
        <div>
          <p className={style.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            {single ? null : (
              <span className={style.access}>{photo.acessos}</span>
            )}
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
      {single ? null : (
        <PhotoComments id={photo.id} single={single} comments={comments} />
      )}
    </div>
  );
};

export default PhotoContent;
