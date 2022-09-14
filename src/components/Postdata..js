import axios from "axios";
import React, { useState, useEffect } from "react";
const PostData = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPost] = useState();
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      //setPost(response.data);
    });
  }, []);
  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  return (
    <>
      <div className="postdata-wrapper">
        <ul>
          {posts &&
            posts.length > 0 &&
            posts.map((post) => <li key={post.id}>{post.title} </li>)}
        </ul>
        {/* <h1>{post.title}</h1>
        <p>{post.body}</p> */}
      <button onClick={createPost}>Create Post</button>
      </div>
    </>
  );
};

export default PostData;
