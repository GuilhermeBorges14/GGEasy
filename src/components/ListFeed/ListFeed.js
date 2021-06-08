import React from "react";
import ListItens from "./ListItens";
import ItemModal from "./ItemModal";
import PropTypes from "prop-types";

const ListFeed = ({ user }) => {
  const [modal, setModal] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modal && <ItemModal photo={modal} setModal={setModal} />}
      {pages.map((page) => (
        <ListItens
          user={user}
          key={page}
          page={page}
          setModal={setModal}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

ListFeed.defaultProps = {
  user: 0,
};

ListFeed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default ListFeed;
