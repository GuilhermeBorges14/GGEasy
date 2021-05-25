import React from "react";
import ListItens from "./ListItens";
import ItemModal from "./ItemModal";

const ListFeed = () => {
  const [modal, setModal] = React.useState(null);

  return (
    <div>
      {modal && <ItemModal photo={modal} />}
      <ListItens setModal={setModal} />
    </div>
  );
};

export default ListFeed;
