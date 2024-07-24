//String Manipulation Functions
//1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example
console.log(reverseString('Nneoma')); 

//2. Count Characters
function countCharacters(str) {
    return str.length;
}

// Example
console.log(countCharacters('Jennifer'));

//3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                   .join(' ');
}

// Example
console.log(capitalizeWords('how far nneoma'));

//Array Functions
//1. Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Examples
console.log(findMax([1, 2, 3, 4])); // ➞ 4
console.log(findMin([1, 2, 3, 4])); // ➞ 1

//2. Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Example
console.log(sumArray([1, 2, 3, 4])); // ➞ 10

//3. Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example: Filter out even numbers
console.log(filterArray([1, 2, 3, 4], num => num % 2 !== 0)); // ➞ [1, 3]

//Mathematical Functions
//1. Factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Example
console.log(factorial(5)); // ➞ 120

//2. Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example
console.log(isPrime(7)); // ➞ true
console.log(isPrime(10)); // ➞ false

//3. Fibonacci Sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example
console.log(fibonacci(5)); // ➞ [0, 1, 1, 2, 3]


