import React from "react";

const Methods = () => {
  const numbers = [1, 7, 2, 3, 8];
  const newNumbers = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const cal = [3, 4, 5, 6, 7, 8, 9];
  const newCal = cal.filter((cal) => cal >= 6);
  const check = [4, 3, 2, 78, 90, 10];
  const checkNumber = check.includes(10);
  //console.log(checkNumber);
  const findNum = [32, 56, 21, 32, 45];
  const findNumber = findNum.find((number) => number >= 21);
  console.log(findNumber);
  const concatBrands1 = ["Audi", "Tata", "Hyundai"];
  const concatBrands2 = ["Nexa", "Ford"];
  const concatBrands3 = ["Cecilie", "Linus"];
  const newArray = concatBrands1.concat(concatBrands2, concatBrands3);
  const ages = [12, 34, 56, 78];
  const checkAge = ages.every((ages) => ages > 18);
  console.log(checkAge);
  const colors = ["Red", "Black", "Blue", "Icy Blue", "Green"];
  const colorsPop = colors.pop();
  const colorResult = colors.fill("White", 2, 4);
  let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  let itemList = [];
  items.forEach((item, index) => {
    itemList.push(<li id={index}>{item}</li>);
  });
  const names = ["Annie","Simran","Sharan","Neel"];
  const namesJoin = names.join("++++");
  
  return (
    <>
      <h1>Example of array methods</h1>
      <p>Here is the new value ge by reduce method:{newNumbers}</p>
      <p>filter methods used {newCal}</p>
      <p>Numbers greater than 21 are:{findNumber}</p>
      <p>Conact arrays: {newArray}</p>
      <p>Fill result: {colorResult}</p>
      <ul>{itemList}</ul>
      <p>Example of join {namesJoin} </p>
      <p>Color popping: {colorsPop}</p>
      <p>After popping:{colors}</p>
    </>
  );
};

export default Methods;
