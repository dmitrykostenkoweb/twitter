import React from "react";
import "./app-header.css";

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header">
      <div className="info-section">
        <h1>Kostenko Dmitry </h1>
      </div>
      <p>
        {allPosts} posts, liked {liked}
      </p>
    </div>
  );
};

export default AppHeader;
