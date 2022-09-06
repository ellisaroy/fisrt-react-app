import React from 'react';

const Methods = () =>{
    const numbers = [1,7,2,3,8];
        const newNumbers = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue);
    return(
        <><h1>Example of array methods</h1>
            <h2>Reduce Method</h2>
            <p>Here is the new value ge by reduce method:{newNumbers}</p>
        </>
    );
};

export default Methods;