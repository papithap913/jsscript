// 1. Print Odd Numbers in an Array (Anonymous Function)
let printOddNumbers = function(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log("Odd Numbers:", oddNumbers);
}
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// IIFE for Print Odd Numbers
(function(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log("Odd Numbers (IIFE):", oddNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 2. Convert Strings to Title Caps (Anonymous Function)
let titleCaps = function(strArr) {
    let result = strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    console.log("Title Caps:", result);
}
titleCaps(["hello", "world", "javascript", "functions"]);

// IIFE for Title Caps
(function(strArr) {
    let result = strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    console.log("Title Caps (IIFE):", result);
})(["hello", "world", "javascript", "functions"]);

// 3. Sum of All Numbers in an Array (Anonymous Function)
let sumOfNumbers = function(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of Numbers:", sum);
}
sumOfNumbers([1, 2, 3, 4, 5]);

// IIFE for Sum of Numbers
(function(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of Numbers (IIFE):", sum);
})([1, 2, 3, 4, 5]);

// 4. Return Prime Numbers in an Array (Anonymous Function)
let findPrimes = function(arr) {
    let primes = arr.filter(num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
    console.log("Prime Numbers:", primes);
}
findPrimes([2, 3, 4, 5, 6, 7, 8, 9]);

// IIFE for Prime Numbers
(function(arr) {
    let primes = arr.filter(num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
    console.log("Prime Numbers (IIFE):", primes);
})([2, 3, 4, 5, 6, 7, 8, 9]);

// 5. Return Palindromes in an Array (Anonymous Function)
let findPalindromes = function(arr) {
    let palindromes = arr.filter(str => str === str.split('').reverse().join(''));
    console.log("Palindromes:", palindromes);
}
findPalindromes(["madam", "hello", "level", "world"]);

// IIFE for Palindromes
(function(arr) {
    let palindromes = arr.filter(str => str === str.split('').reverse().join(''));
    console.log("Palindromes (IIFE):", palindromes);
})(["madam", "hello", "level", "world"]);
