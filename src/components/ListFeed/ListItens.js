import React from "react";
import { PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import ListItem from "./ListItem";
import style from "./ListItens.module.css";

const ListItens = ({ setModal }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchItem() {
      const { url, options } = PHOTO_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchItem();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${style.list} animationLeft`}>
        {data.map((item) => (
          <ListItem key={item.id} item={item} setModal={setModal} />
        ))}
      </ul>
    );
  else return null;
};

export default ListItens;
