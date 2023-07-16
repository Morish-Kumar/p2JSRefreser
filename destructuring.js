// destructuring - easily extract array elements or objects properties and store them in variables

// spread takes out all elements and property and distributes them in a new array or object but destructuring takes out single elements and property  and store them in variable for arrays
// type of destructing - 
/*
array destructing - 
example - [a, b] = ["hello", "max"]
console.log(a)  // hello 
console.log(b)  // max
*/

const number = [1, 2, 3, 4, 5];
[num1, num2] = number;
console.log(num1, num2);