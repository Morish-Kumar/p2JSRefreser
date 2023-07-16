// property - they are like the variable attached to the classes/object
// method - they are the functions attached to the classes/object


// with the new version of js we can assign a property inside the class with myproperty  equal value. so, we can skip the constructor call

// with new generaion js we use arrow function for defining the method

class Human{
        gender = "male";

    printgender =() => {
        console.log(this.gender);
    }
}

class person1 extends Human{
        age = 12;

    printAge = () => {
        console.log(this.age);
    }
}
const age = new person1();
age.printAge();