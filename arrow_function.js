// arrow function - different syntax for creating js functions

// syntax - const myFun = () => {body}
// arrow function has no issue with this keyword

const myName = (name) => {
    console.log(name)
}

myName("mohan")

// if we have only one parameter we can ommit the paranthesis

const yourName = name => {
    console.log(name)
}

yourName("sahil")

// if we have only return statement we an omit the curly bracket and also the return keyboard

const multiply = (number) => number * 2

console.log(multiply(2))