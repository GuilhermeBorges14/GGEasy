import React from "react";

const TokenPost = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");

  function enviar(event) {
    event.preventDefault();

    fetch("http://ggeasy.test/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
        return json;
      });
  }

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="nome"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      ></input>
      <input
        type="text"
        placeholder="senha"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      ></input>

      <button>Enviar</button>
      <p>{token}</p>
    </form>
  );
};

export default TokenPost;
