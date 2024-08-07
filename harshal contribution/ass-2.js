// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male


let array_of_obj = [
    {name:'ram', age: 19723, gender: 'Male'},
    {name:'sita' , age:13 , gender: 'Femail'},
    {name:'sam' , age:12 , gender: 'Male'},
    {name:'pinky' , age:96 , gender: 'Female'}
]

// Method 1

function getSeletedData() {
    const selected_arr = []
    for (let i = 0; i < array_of_obj.length; i++) {
        if (array_of_obj[i].age > 18 && array_of_obj[i].gender.toLowerCase() === 'male') {
            selected_arr.push(array_of_obj[i]) }
    }
    return selected_arr }

console.log(getSeletedData())

// Method 2, although this is not a function insted it uses a build-in function.

console.log(array_of_obj.filter(person => person.age > 18 && person.gender.toLowerCase() === 'male'))