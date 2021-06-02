import React from "react";
import { PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import ListItem from "./ListItem";
import style from "./ListItens.module.css";

const ListItens = ({ page, user, setModal, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchItem() {
      const total = 8;
      const { url, options } = PHOTO_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json < total) setInfinite(false);
      console.log(json);
    }
    fetchItem();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${style.list} animationLeft`}>
        {data.map((photo) => (
          <ListItem key={photo.id} photo={photo} setModal={setModal} />
        ))}
      </ul>
    );
  else return null;
};

export default ListItens;
