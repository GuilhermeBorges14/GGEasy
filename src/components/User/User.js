import React from "react";
import { Route, Routes } from "react-router";
import { UserContext } from "../../UserContext";
import NotFound from "../General/NotFound";
import ListFeed from "../ListFeed/ListFeed";
import ListItens from "../ListFeed/ListItens";
import UserHeader from "./UserHeader";
import UserItem from "./UserItem";
import UserStats from "./UserStats";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<ListFeed user={data.id} />} />
        <Route path="/item" element={<UserItem />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
