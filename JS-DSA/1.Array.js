const fruits = ["apple", "banana", "cherry"];

//Accessing elements
console.log(fruits[0]); // apple
console.log(fruits[1]); // bannana

//Update elements
fruits[2] ="blueberry";
console.log(fruits); // [ 'apple', 'banana', 'blueberry' ]

// Find the total number of elements
console.log(fruits.length); // 3

// ###Dynamic arrays in javascript

// Adding element
fruits.push("orange"); // to the end push the velue
console.log(fruits);
fruits.unshift("strawberry"); // to the beginning push the value 
console.log(fruits);

// Removing element
fruits.pop(); // Remove the element from the end
console.log(fruits);
fruits.shift(); // Remove the element from the start
console.log(fruits);
