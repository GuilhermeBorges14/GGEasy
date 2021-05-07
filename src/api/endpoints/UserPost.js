import React from "react";

const UserPost = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function enviar(event) {
    event.preventDefault();

    fetch("http://ggeasy.test/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
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
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      ></input>
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
