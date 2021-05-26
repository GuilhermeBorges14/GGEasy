import React from "react";
import { PHOTO_MODAL_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import PhotoContent from "../Photo/PhotoContent";
import style from "./ItemModal.module.css";

const ItemModal = ({ photo, setModal }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_MODAL_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function outModal(event) {
    if (event.target === event.currentTarget) setModal(null);
  }

  return (
    <div className={style.modal} onClick={outModal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default ItemModal;
