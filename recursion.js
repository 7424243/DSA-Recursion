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