import axios from "axios";
import React, { useState, useEffect } from "react";
const PostData = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div className="postdata-wrapper">
        <p></p>
      </div>
    </>
  );
};

export default PostData;
