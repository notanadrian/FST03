console.log("Hello World!");

// This is a single line comment
/* 
    This is a multiple 
    line 
    comment
*/

let firstName = "John";
console.log("The first name is:", firstName);

var lastName = "Doe";
console.log(lastName);

const birthday = "01-24-2020";
console.log(birthday);
// let = mutable/change
// var = mutable/changeable
// const = unmutable/unchangeable - block scope

firstName = "Justin";
console.log("The first name is:", firstName);
//This produce error because const is unmutable or unchangeable
// birthday = "10-15-2020";
// console.log(birthday);

if(true){
    let block = "stone"; // block scope
    var stone = "line"; // global block scope
    console.log(block);
    console.log(stone);
}

console.log(stone);
// console.log(block);