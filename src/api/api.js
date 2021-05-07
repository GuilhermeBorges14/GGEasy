import React from "react";
import UserPost from "./endpoints/UserPost.js";
import TokenPost from "./endpoints/TokenPost.js";
import PhotoPost from "./endpoints/PhotoPost.js";
import PhotoGet from "./endpoints/PhotoGet.js";

function Api() {
  return (
    <div>
      <h2>User Post</h2>
      <UserPost />
      <h2>Token Post</h2>
      <TokenPost />
      <h2>Item Post</h2>
      <PhotoPost />
      <h2>Item Post</h2>
      <PhotoGet />
    </div>
  );
}

export default Api;
