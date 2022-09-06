import React, { useState } from "react";
import Mockdata from '../MOCK_DATA.json';
const Search=() =>{
    const [searchTerm,setSearchTerm] = useState("");
    return( 
        <>
        <h2>Search</h2>
        <input 
            type="text" 
            placeholder="Search anything......" 
            onChange={(event)=>{
              //  console.log(event);
                setSearchTerm(event.target.value);
            }}
        />
        {Mockdata.filter((val)=>{
            if (searchTerm == "") {
                return val
            }else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map((val,key)=>{
            return (
                <div className="search-values" key="{key}"><p>{val.first_name}</p></div> 
            );
        })}
        </>
    );
};

export default Search;