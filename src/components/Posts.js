import React from "react";

function Posts({ post }) {
  return (
    <div className="post-container">
      <div className="post">
        <div className="post-header">
          <i className="far fa-user-circle post-icon"></i>
          <h3>{post.username}</h3>
        </div>
        <h4 className="post-caption">
          <i className="fas fa-quote-left" /> {post.title}{" "}
          <i className="fas fa-quote-right" />
        </h4>
        <p className="hashtags">{post.hashtag}</p>
        <div className="post-footer">
          <i className="far fa-heart"></i>
          <i className="far fa-star"></i>
          <i className="far fa-comment"></i>
        </div>
      </div>
    </div>
  );
}

export default Posts;
