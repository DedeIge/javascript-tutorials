console.log("functions")
let x = 5
function greet(name = "molly"){
    return `Hello, ${name}!`
}

const greeting = greet("mark")
console.log(greeting)

function sum(num1, num2){

    num1 = +num1//Number(num1)
    num2 = +num2//Number(num2)

    if(!num1){
        return "second number not defined"
    }
    if(!num2){
        return "first number not defined"
    }

    return num1 + num2
}

// handling undefined
const result = sum(7, "j")
console.log(result)
//for of gives values
//for in gives positions

function doubler(arr){
    if(!arr){
        return " arr is undefined"
    }
    if (!Array.isArray(arr)){
        return "arr is not an array"
    }
    const newArr = []
    for (const num of arr){
        newArr[newArr.length] = num * 2
    }

    return newArr
}

const doubledArray = doubler([1, 2, 3, 4, 5])
console.log(doubledArray)

//rest and spread
const array = [5, 6, 7, 8, 9]
console.log(...array)
console.log([1, 2, 3, 4, ...array, 10])

//destructuring

const obj ={
    name: "Jon",
    age: 45
}

const {name} = obj
console.log(name)
//callback fctns

function doMath(num1, num2, func) {
    return func(num1, num2)
}

const res = doMath(2, 5, (x, y)=> x + y)

console.log(res)
// immediately called functions
// Assignment
// currying