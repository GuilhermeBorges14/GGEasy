import React from "react";

const PhotoGet = () => {
  function enviar(event) {
    event.preventDefault();

    fetch("http://ggeasy.test/json/api/photo")
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
      <input type="text"></input>
      <button>Obter</button>
    </form>
  );
};

export default PhotoGet;
