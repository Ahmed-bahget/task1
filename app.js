//chatgpt helped me in examples and handeled it 


// Calculate area of a rectangle
console.log("hello")
let length = 50;
let width = 30;

let area = length * width;

console.log("The area of the rectangle is: " + area);

// Classify a student's grade
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Creating an array
let fruits = ["apple", "banana", "orange"];

// Accessing elements
console.log(fruits[0]); // apple

// Modifying elements
fruits[1] = "grape";

// Array length
console.log(fruits.length); // 3

// Iterating through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Learn about array methods
fruits.push("kiwi"); // Add to the end
fruits.pop(); // Remove from the end
fruits.shift(); // Remove from the beginning
fruits.unshift("mango"); // Add to the beginning

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Generate Fibonacci sequence up to a specified number of terms
function generateFibonacci(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence;
}

let numberOfTerms = 10;
console.log("Fibonacci sequence: " + generateFibonacci(numberOfTerms));





