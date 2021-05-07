import React from "react";

const PhotoPost = () => {
  const [nome_item, setNomeItem] = React.useState("");
  const [preco, setPreco] = React.useState("");
  const [nome_jogo, setNomeJogo] = React.useState("");
  const [contato, setContato] = React.useState("");
  const [token, setToken] = React.useState("");
  const [img, setImg] = React.useState("");

  function enviar(event) {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append("img", img);
    formdata.append("preco", preco);
    formdata.append("nome_item", nome_item);
    formdata.append("nome_jogo", nome_jogo);
    formdata.append("contato", contato);
    formdata.append("token", token);

    fetch("http://ggeasy.test/json/api/photo", {
      method: "POST",
      headers: {
        Authorization: "Bearer" + token,
      },
      body: formdata,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      ></input>
      <input
        type="text"
        placeholder="nome do item"
        value={nome_item}
        onChange={({ target }) => setNomeItem(target.value)}
      ></input>
      <input
        type="text"
        placeholder="preço"
        value={preco}
        onChange={({ target }) => setPreco(target.value)}
      ></input>
      <input
        type="text"
        placeholder="nome do jogo"
        value={nome_jogo}
        onChange={({ target }) => setNomeJogo(target.value)}
      ></input>
      <input
        type="text"
        placeholder="contato"
        value={contato}
        onChange={({ target }) => setContato(target.value)}
      ></input>
      <input
        type="file"
        onChange={({ target }) => setImg(target.files[0])}
      ></input>
      <button>Enviar</button>
    </form>
  );
};

export default PhotoPost;
