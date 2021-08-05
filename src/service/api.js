import axios from "axios";

const url = "http://localhost:8000/Posts";

export const getPosts = async () => {
  return await axios.get(url);
};

export const addPosts = async (item) => {
  return await axios.post(url, item);
};
