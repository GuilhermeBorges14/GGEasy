import React from "react";
import { Route, Routes } from "react-router";
import ListItens from "../ListFeed/ListItens";
import UserHeader from "./UserHeader";
import UserItem from "./UserItem";
import UserStats from "./UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<ListItens />} />
        <Route path="/item" element={<UserItem />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
