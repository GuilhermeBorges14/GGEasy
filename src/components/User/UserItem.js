import React from "react";
import { useNavigate } from "react-router";
import { PHOTO_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../General/Button";
import Input from "../General/Input";
import Error from "../Helpers/Error";
import style from "./UserItem.module.css";

const UserItem = () => {
  const nome_item = useForm();
  const nome_jogo = useForm();
  const contato = useForm();
  const preco = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/minhaconta");
  }, [data, navigate]);

  function submitItem(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome_item", nome_item.value);
    formData.append("nome_jogo", nome_jogo.value);
    formData.append("contato", contato.value);
    formData.append("preco", preco.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function submitImg({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${style.item} animationLeft`}>
      <form onSubmit={submitItem}>
        <Input
          label="Nome do item"
          type="text"
          name="nome_item"
          {...nome_item}
        />
        <Input
          label="Nome do jogo"
          type="text"
          name="nome_jogo"
          {...nome_jogo}
        />
        <Input label="Contato" type="text" name="contato" {...contato} />
        <Input label="Preço" type="number" name="preco" {...preco} />
        <input
          className={style.file}
          type="file"
          name="img"
          id="img"
          onChange={submitImg}
        />
        {loading ? (
          <Button disabled>Postando...</Button>
        ) : (
          <Button>Postar</Button>
        )}

        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={style.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserItem;
