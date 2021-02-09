/* ======== 1. Counting Sheep =================
Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number 
of sheep you have. The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.
*/

const countingSheep = function(number) {
    //Base Case
    if(number === 0) {
        return number + ': All sheep jumped over the fence'
    }
    //General Case
    return  `${number}: Another sheep jumps over the fence` + countingSheep(number - 1)
}

console.log(countingSheep(3))

/* ======== 2. Power Calculator =================
Write a  function called powerCalculator() that takes two parameters, 
an integer as a base, and another integer as an exponent. The function 
returns the value of the base raised to the power of the exponent. 
Use only exponents greater than or equal to 0 (positive numbers)
    powerCalculator(10,2) should return 100
    powerCalculator(10,-2) should return exponent should be >= 0
*/

const powerCalculator = function(baseInt, exponentInt) {
    if(exponentInt < 0) {
        return 'exponent should be >= 0'
    }
    if(exponentInt === 1) {
        return baseInt
    }
    return baseInt * powerCalculator(baseInt, exponentInt - 1)
}

/* ======== 3. Reverse String =================
Write a a function that reverses a string. 
Take a string as input, reverse the string, 
and return the new string.
*/

const reverseString = function(string) {
    //base case
    if(string.length === 1) {
        return string
    }
    //general case
    //use a negative number to slice from the end of a string
    return string.slice(-1) + reverseString(string.slice(0,-1)) 
}

/* ======== 4. nth Triangular Number =================
Calculate the nth triangular number. A triangular number 
counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing 
a triangle with n dots on a side, and is equal to the sum 
of the n natural numbers from 1 to n. This is the Triangular 
Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
                          *
            *           *    *
*     |   *   *  |   *    *    *  |
 1st       2nd           3rd             nth? 
*/

const triangularNumber = function(number) {
    //base case
    if(number === 0) {
        return 0
    }
    //general case
    return number + triangularNumber(number - 1)
}
 
/* ======== 5. String Splitter =================
Write a recursive function that splits a string based 
on a separator (similar to String.prototype.split). 
Don't use JS array's split function to solve this problem.
    Input: 02/20/2020
    Output: ["02", "20", "2020"]
*/

const stringSplitter = function(string, separator) {
    //base case
    if(string.indexOf(separator) === -1) {
        return [string.slice(0, string.length)]
    }
    //general case
    return [string.slice(0, string.indexOf(separator)), ...stringSplitter(string.slice(string.indexOf(separator) + 1), separator)]
}

console.log(stringSplitter('02/20/2020', '/'))

/* ======== 6. Fibonacci =================
Write a recursive function that prints the Fibonacci 
sequence of a given number. The Fibonacci sequence is 
a series of numbers in which each number is the sum of 
the 2 preceding numbers. For example, the 7th Fibonacci 
number in a Fibonacci sequence is 13. The sequence looks 
as follows: 1, 1, 2, 3, 5, 8, 13.
*/

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

/* ======== 7. Factorial =================
Write a recursive function that finds the factorial 
of a given number. The factorial of a number can be 
found by multiplying that number by each number between 
itself and 1. For example, 
the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/

const factorial = function(number) {
    if(number === 0) {
        return 0
    } else if(number === 1) {
        return 1
    }
    return number * factorial(number - 1)
}

console.log(factorial(5)) 

/* ======== 8. Find a way out of the maze====================
You have entered a Maze and need to find your way out of it. 
There are more than one possible paths through the Maze to 
the single exit point. Write a recursive function that will 
help you find a possible path though the maze.
*/
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
]
let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]

const escape = function(maze, pos=0, row=0, col=0, dir='S', path=[]) {
    if(col < 0 || row < 0) {
        return
    } else if(col >=maze[0].length || row >= maze.length) {
        return
    }
    path[pos] = dir
    pos++
    if(maze[row][col] === 'e'){
        console.log(path)
        return
    }
    if(maze[row][col] === ' ') {
        //the current cell is free. Mark it as visited.
        maze[row][col] = 's'
        //explore all possible options
        escape(maze, pos, row - 1, col, 'U', path)
        escape(maze, pos, row, col + 1, 'R', path)
        escape(maze, pos, row + 1, col, 'D', path)
        escape(maze, pos, row, col - 1, 'L'. path)
    }
    pos--
}

escape(maze)

/* ======== 9. Find ALL the ways out of the maze =================
Use the above maze and modify your solution so it finds All the 
possible exit paths through the Maze. To find all possible exit 
paths through the maze, think about how many places you can move 
at each turn. Possibly up, down, left or right?
Notice that this maze has 3 exits paths. Your recursive function 
should print all three of the paths with the proper directions. 
For example, given the maze above, the program should output the following:
Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD
*/

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]

const escape = function(maze, pos=0, row=0, col=0, dir='S', path=[]) {
    if(col < 0 || row < 0 ) {
        return 
    } else if(col >= maze[0].length || row >= maze.length) {
        return
    }
    path[pos] = dir
    pos++
    if(maze[row][col] === 'e'){
        console.log(path)
        return
    }
    if(maze[row][col] === ' ') {
        //the current cell is free. Mark it as visited.
        maze[row][col] = 's'
        //explore all possible options
        escape(maze, pos, row - 1, col, 'U', path)
        escape(maze, pos, row, col + 1, 'R', path)
        escape(maze, pos, row + 1, col, 'D', path)
        escape(maze, pos, row, col - 1, 'L'. path)
        maze[row][col] = ' '
    }
    pos--
}

escape(maze)


/* ======== 10. Anagrams =================
An anagram is any word or phrase that uses the letters 
of a given ("subject") word or phrase in another, rearranged 
order. Write a function that creates an anagram list, listing 
all the rearrangements of a given word. For example, if the 
user types "east", the program should list all 24 permutations, 
including "eats", "etas", "teas", and non-words like "tsae".
*/

const anagram = function(subject) {
    let results = []
    if(subject.length <= 1) {
        return [subject]
    }
    const string = subject.split('')
    string.forEach((letter, index) => {
        let leftLetter = [...string.slice(0, index), ...string.slice(index + 1)].join('')
        const arrangements = anagram(leftLetter)
        arrangements.forEach(arrangement => {
            results.push(letter + arrangement)
        })
    })
    return results
}

console.log(anagram('east'))

/* ======== 11. Organization Chart =================
Write a recursive function that prints the following organization 
chart. Your output should be as shown below with proper indentation 
to show the hierarchy. You may store the org chart in an object and 
send that as an input to your program.
Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes
*/

const organizationChart = function(organization, boss) {
    let result = {}
    organization.filter(item => item.boss === boss).forEach(item => result[item.id] = organizationChart(organization, item.id))
    return result
}

const org = [
    {id: 'Zuckerberg', boss: null},
    {id: 'Schroepfer', boss: 'Zuckerberg'},
    {id: 'Schrage', boss: 'Zuckerberg'},
    {id: 'Sandberg', boss: 'Zuckerberg'},
    {id: 'Bosworth', boss:'Schroepfer' },
    {id: 'Zhao', boss:'Schroepfer' },
    {id: 'Steve', boss:'Bosworth' },
    {id: 'Kyle', boss:'Bosworth' },
    {id: 'Andra', boss:'Bosworth' },
    {id: 'Richie', boss: 'Zhao'},
    {id: 'Sofia', boss: 'Zhao'},
    {id: 'Jen', boss: 'Zhao'},
    {id: 'VanDyck', boss:'Schrage' },
    {id: 'Swain', boss:'Schrage' },
    {id: 'Sabrina', boss:'VanDyck' },
    {id: 'Michelle', boss:'VanDyck' },
    {id: 'Josh', boss:'VanDyck' },
    {id: 'Blanch', boss:'Swain' },
    {id: 'Tom', boss:'Swain' },
    {id: 'Joe', boss:'Swain' },
    {id: 'Goler', boss:'Sandberg' },
    {id: 'Hernandez', boss:'Sandberg' },
    {id: 'Moissinac', boss:'Sandberg' },
    {id: 'Kelley', boss:'Sandberg' },
    {id: 'Eddie', boss:'Goler' },
    {id: 'Julie', boss:'Goler' },
    {id: 'Annie', boss:'Goler' },
    {id: 'Rowi', boss:'Hernandez'},
    {id: 'Inga', boss:'Hernandez'},
    {id: 'Morgan', boss:'Hernandez'},
    {id: 'Amy', boss:'Moissinac'},
    {id: 'Chuck', boss:'Moissinac'},
    {id: 'Vinni', boss:'Moissinac'},
    {id: 'Eric', boss:'Kelley'},
    {id: 'Ana', boss:'Kelley'},
    {id: 'Wes', boss:'Kelley'},
]

console.log(JSON.stringify(organizationChart(org, null)))

/* ======== 12. Binary Representation =================
Write a recursive function that prints out the binary representation 
of a given number. For example, the program should take 3 as an input 
and print 11 as output, or 25 as an input and print 11001 as an output. 
Note that the binary representation of 0 should be 0.
*/

const binary = function(number) {
    if(number === 0) {
        return 0
    }
    const dividedNumber = Math.floor(number/2)
    const remainder = number % 2
    if(dividedNumber === 0) {
        return remainder
    }
    return binary(dividedNumber) + remainder.toString()
}

console.log(binary(25))