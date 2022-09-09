import React from 'react';
import { useState,useEffect,createContext,useContext  } from 'react';
import ReactDOM from "react-dom/client";
const About = (props) =>{
    const greet = "Anita";
    const who ="developer";
    // const UserContext = createContext();
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<Component1 />);
    
    return(
        <>
       
            <div>
                <h1>Hey {props.greet} {props.who}</h1>
            <h2>What is Lorem Ipsum?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </div>
        </>
    );
    
    // function Component1() {
    //     const [user, setUser] = useState("Jesse Hall");
      
    //     return (
    //       <UserContext.Provider value={user}>
    //         <h1>{`Hello ${user}!`}</h1>
    //         <Component2 />
    //       </UserContext.Provider>
    //     );
    //   }
    //   function Component2() {
    //     return (
    //       <>
    //         <h1>Component 2</h1>
    //         <Component3 />
    //       </>
    //     );
    //   }
      
    //   function Component3() {
    //     return (
    //       <>
    //         <h1>Component 3</h1>
    //         <Component4 />
    //       </>
    //     );
    //   }
      
    //   function Component4() {
    //     return (
    //       <>
    //         <h1>Component 4</h1>
    //         <Component5 />
    //       </>
    //     );
    //   }
      
    //   function Component5() {
    //     const user = useContext(UserContext);
      
    //     return (
    //       <>
    //         <h1>Component 5</h1>
    //         <h2>{`Hello ${user} again!`}</h2>
    //         <div id="root"></div>
    //       </>
    //     );
    //   }
     
     
};
export default About;

