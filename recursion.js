//1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

const countingSheep = function(number) {
    //Base Case
    if(number === 0) {
        return number + ': All sheep jumped over the fence'
    }
    //General Case
    return  `${number}: Another sheep jumps over the fence` + countingSheep(number - 1)
}

console.log(countingSheep(3))

//2. Power Calculator
//Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

const powerCalculator = function(baseInt, exponentInt) {
    if(exponentInt < 0) {
        return 'exponent should be >= 0'
    }
    if(exponentInt === 1) {
        return baseInt
    }
    return baseInt * powerCalculator(baseInt, exponentInt - 1)
}

//3. Reverse String
//Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

const reverseString = function(string) {
    //base case
    if(string.length === 1) {
        return string
    }
    //general case
    //use a negative number to slice from the end of a string
    return string.slice(-1) + reverseString(string.slice(0,-1)) 
}

//4. nth Triangular Number
//Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const triangularNumber = function(number) {
    //base case
    if(number === 0) {
        return 0
    }
    //general case
    return number + triangularNumber(number - 1)
}
 
//5. String Splitter
//Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

const stringSplitter = function(string, separator) {
    //base case
    if(string.indexOf(separator) === -1) {
        return [string.slice(0, string.length)]
    }
    //general case
    return [string.slice(0, string.indexOf(separator)), ...stringSplitter(string.slice(string.indexOf(separator) + 1), separator)]
}

console.log(stringSplitter('02/20/2020', '/'))

//6. Fibonacci
//Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

const fibonacci = function(number) {
    //base case
    if(number === 0) {
        return
    } else if(number === 1) {
        return 1
    } else if(number === 2) {
        return 1
    }
    //general case
    return fibonacci(number - 2) + fibonacci(number - 1)
}

console.log(fibonacci(7))

//7. Factorial
//Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

const factorial = function(number) {
    if(number === 0) {
        return 0
    } else if(number === 1) {
        return 1
    }
    return number * factorial(number - 1)
}

console.log(factorial(5)) 

