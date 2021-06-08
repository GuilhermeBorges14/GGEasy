import React from "react";
import { useParams } from "react-router";
import ListFeed from "../ListFeed/ListFeed";

const UserProfile = () => {
  const { user } = useParams();
  return (
    <div className="container mainContainer">
      <h1 className="title">{user}</h1>
      <ListFeed user={user} />
    </div>
  );
};

export default UserProfile;
