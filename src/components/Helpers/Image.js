import React from "react";
import style from "./Image.module.css";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function load({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={style.imageContent}>
      {skeleton && <div className={style.skeleton}></div>}
      <img onLoad={load} className={style.image} alt={alt} {...props} />
    </div>
  );
};

export default Image;
