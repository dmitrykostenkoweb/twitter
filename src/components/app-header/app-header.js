import React from "react";
import "./app-header.css";
import avatar from "./app-header-img/selfie.jpg";

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header">
      <div className="info-section">
        <div className="avatar-wrapper">
          <img className="avatar" src={avatar} alt={"avatar"} />
        </div>
        <h1>Kostenko Dmitry </h1>
      </div>

      <p>
        {allPosts} posts, liked {liked}{" "}
      </p>
    </div>
  );
};

export default AppHeader;
