// Write a function called sum that finds the sum from 1 to a number

function sum(number) {
    let total = 0
    for (let i = 0; i <= number; i++) {
        total += i;
    }
    return total
}

total = sum(3)

console.log("Sum : " + total)