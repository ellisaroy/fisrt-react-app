import axios from "axios";
import React, { useState, useEffect } from "react";

const GetPost = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPost] = useState();
  const [post, getPost] = useState();
  useEffect(() => {
    axios.get(baseURL).then((response) => {
     setPost(response.data);
    });
  }, []);
  const createPost = () => {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        getPost(response.data);
        console.log(response.data);
      });
  };

  return (
    <>
       {posts &&
            posts.length > 0 &&
            posts.map((post) => <li key={post.id}>{post.title} </li>)}
      <button onClick={createPost}>Create Post</button>
    </>
  );
};

export default GetPost;
