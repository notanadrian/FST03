// Arrays
	
let fruits = ["Banana","Apple","Orange","Pear","Avocado","Durian","Watermelon","Guava","Chico"];
	
console.log("Fruits:" ,fruits);
	
// Array.length
	
console.log("Fruits Length:",fruits.length);
	
//Updating our element/s
fruits[0] = "Grapes";
console.log("Updated Fruit",fruits[0]);

//.push() method - add elements to the array
	
fruits.push("Berry");
console.log("Added a fruit:", fruits);
console.log("Added a fruit:", fruits.length);
	
//.pop() method - remove elements to the array
	
fruits.pop("Berry");
fruits.pop();
console.log("Added a fruit:", fruits);
console.log("Added a fruit:", fruits.length);
	
	
//.splice() method 
// 1 - Start positon;
// 2 - remove elements
// 3 - adding elements
fruits.splice(1,5,"Strawberry");
fruits.pop();
console.log("Uses Splice method", fruits);
console.log("Uses Splice method", fruits.length);
	
//.includes() method: true / false
	
console.log("Is Grapes available?", fruits.includes("Grapes"));
console.log("Is Apple available?", fruits.includes("Apple"));
	
//.forEach()
	
fruits.forEach(function(fruits){
	console.log("Fruit:",fruits);
});
