import React from "react";
import Mockdata from '../MOCK_DATA.json';
const Search = () =>{
    return( 
        <><h2>Search</h2>
            <input type="text" placeholder="Search anything......"/>
        {Mockdata.map((val,key)=>{
            //           console.log(val);
            return <div className="search-values">{val.first_name}</div> ;
        })}
        </>
    );
};

export default  Search;