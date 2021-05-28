import React from "react";
import { UserContext } from "../../UserContext";
import CommentsForm from "./CommentsForm";
import style from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);
  const commentsSection = React.useRef(null);
  const [comments, setComments] = React.useState(() => props.comments);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);
  return (
    <>
      <ul ref={commentsSection} className={style.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author} :</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <CommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
