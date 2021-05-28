import React from "react";
import { COMMENT_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import style from "./CommentsForm.module.css";
import { ReactComponent as Btn } from "../../assets/bow.svg";

const CommentsForm = ({ id, setComments }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState("");

  async function sendComment(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={style.form} onSubmit={sendComment}>
      <textarea
        className={style.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={style.btn}>
        <Btn />
      </button>

      <Error error={error} />
    </form>
  );
};

export default CommentsForm;
