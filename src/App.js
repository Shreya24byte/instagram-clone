import "./App.css";
import { getPosts } from "./service/api";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPostsModal from "./components/AddPostsModal";

function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await getPosts();
    console.log(res.data);
    setData(res.data);
  };
  return (
    <div className="app">
      {open === true ? (
        <AddPostsModal setOpen={setOpen} getData={getData} data={data} />
      ) : null}
      <Header setOpen={setOpen} />
      <div className="posts-container">
        {data
          ? data.map((post) => <Posts key={post.id} post={post} />)
          : "No posts to display"}
      </div>
    </div>
  );
}

export default App;
