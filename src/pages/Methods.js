import React from 'react';

const Methods = () =>{
    const numbers = [1,7,2,3,8];
        const newNumbers = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue);
    const cal = [3,4,5,6,7,8,9]
        const newCal = cal.filter((cal)=>cal >= 6);
    const check = [4,3,2,78,90,10];
        const checkNumber = check.includes(10);
        //console.log(checkNumber);
    const findNum = [12,56,21,32,45];
        const findNumber = findNum.find((number)=> number >=  21);
        console.log(findNumber);
    return(
        <>
            <h1>Example of array methods</h1>
            <h2>Reduce Method</h2>
            <p>Here is the new value ge by reduce method:{newNumbers}</p>
            <p>Map methods used {newCal}</p>
            <p>Numbers greater than 21 are:{findNumber}</p>
        </>
    );
};

export default Methods;