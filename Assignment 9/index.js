// 1.Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function demonstrateScope() {
    if (true) {
        var varVariable = "I am declared with var";
        let letVariable = "I am declared with let";
        const constVariable = "I am declared with const";
        
        console.log(varVariable); // Accessible
        console.log(letVariable); // Accessible
        console.log(constVariable); // Accessible
    }
    
    console.log(varVariable); // Accessible (function-scoped)
    // console.log(letVariable); // Error: letVariable is not defined (block-scoped)
    // console.log(constVariable); // Error: constVariable is not defined (block-scoped)
}

// Call the function to see the behavior
demonstrateScope();


// 2.Create an array called fruits that contains five different fruit names.
// Write a function that returns the second fruit in the array.

const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];


function getSecondFruit(arr) {
    return arr[1]; // Index 1 corresponds to the second element
}

// Call the function
console.log(getSecondFruit(fruits)); // Output: Banana


// 3.Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

function modifyArray(arr) {
    arr.push(5); // Add a new element
    arr.pop();   // Remove the last element
    return arr;  // Return the modified array
}
let arra = [1, 4, 2, 3, 7, 86, 5, 91, 22];
console.log(modifyArray(arr));


// 4.Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

let ar=[1,2,3,4,5];
let sqrd=arr.map((num,i)=>{return Math.pow(num,2)});
console.log(sqrd);

// 5.Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers
let a=[1,2,3,4,5,6,7];
let odd=arr.filter((num,i)=>(num&1)==1);
console.log(odd);

// 6.Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.
const personToStr=(p)=>{
    return `Hello, my name is ${p.name}.
    I am a ${p.age} years old ${p.occupation} from ${p.city}`
}
let person={
    name:"Madhav",
    age:"21",
    occupation:"Student",
    city:"Roorkee"
}
let str=personToStr(person);
console.log(str);

// 7.Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).
function areaRect(rect) {
    return rect.width * rect.height;
}
let rectangle = { width: 2, height: 5 };
console.log(areaRect(rectangle)); // Output: 10


// 8.Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
let obj = {
  name: "Madhav",
  age: "21",
  occupation: "Student",
  city: "Roorkee",
};
function nothing(obj) {
    return Object.keys(obj);
}
console.log(nothing(obj));

// 9.Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 2, c: 3, d: 5 };
function merge(a, b) {
    return Object.assign({}, a, b); // Create a new object to avoid mutation
}
let obj3 = merge(obj1, obj2);
console.log(obj1, obj2); // Original objects remain unchanged
console.log(obj3); // Output: { a: 1, b: 2, c: 3, d: 5 }


// 10.Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array
let arr=[1,2,3,4,5,6,7,8,8];
let total=arr.reduce((acc,curr,i,arr)=>acc+curr,0);
console.log(total);