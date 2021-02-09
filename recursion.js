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
    if(string.length === 1) {
        return string
    }
    //use a negative number to slice from the end of a string
    return string.slice(-1) + reverseString(string.slice(0,-1)) 
}
