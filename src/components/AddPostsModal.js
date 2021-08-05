import { addPosts } from "../service/api";
import React, { useState } from "react";

function AddPostsModal({ setOpen, getData, data }) {
  const [error, setError] = useState(false);
  const [post, setPost] = useState({
    id: data.length + 1,
    username: "",
    hashtag: "",
    title: "",
  });
  const { title, username, hashtag } = post;
  const onValueChange = (e) => {
    e.preventDefault();
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post);
  };
  const addPostDetails = async () => {
    console.log("kk");
    setOpen(false);
    await addPosts(post);
    getData();
  };

  return (
    <div className="modal-container">
      <div id="modal">
        <div id="modalHeader">
          <h2>New Post</h2>
          <i className="fas fa-times" onClick={() => setOpen(false)}></i>
        </div>
        <div className="modal-body">
          <div className="form-items">
            <input
              name="username"
              value={username}
              onChange={onValueChange}
              type="text"
              className="input"
              placeholder="Username"
            />
            <i className="fas fa-user"></i>
          </div>
          <div className="form-items">
            <input
              name="title"
              value={title}
              onChange={onValueChange}
              type="text"
              className="input"
              placeholder="Caption"
            />
            <i className="fas fa-paste"></i>
          </div>
          <div className="form-items">
            <textarea
              name="hashtag"
              value={hashtag}
              onChange={onValueChange}
              className="input message"
              cols="30"
              rows="10"
              placeholder="Add Hashtags....."
            />
          </div>
        </div>
        {error ? (
          <p className="error">Error: Please input all the fields</p>
        ) : null}
        <button
          id="saveButton"
          onClick={() => {
            if (post.username && post.title && post.hashtag) {
              addPostDetails();
              setError(false);
            } else {
              setError(true);
            }
          }}
        >
          Save
        </button>
      </div>
      <div id="modalBackDrop"></div>
    </div>
  );
}

export default AddPostsModal;
