import axios from "axios";
import React from "react";
const App = () =>{
    const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
    const[post,setPost]= React.useState(null);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          console.log("API testing");
          console.log(response.data);
        });
      }, []);
      if(!post) return null;
    return(
        <>
            <div className="postdata-wrapper">
                <p></p>
            </div>
        </>
    );
}

export default App;