import React from "react";
import { Route, Routes } from "react-router";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserItem from "./UserItem";
import UserStats from "./UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/item" element={<UserItem />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
