// classes are the blueprint for javascript objects
// classes are created with the class keyword, contain methods(unction attached to the classe ) and properties(variable attached to the classes)
// classes in javascript can have constructor and it also support inheritance
// example of class
/*
class Person{
    constructor() {
        this.name = "mohan"
    }
    printMyName(){
        console.log(this.name)
    }

}
const person = new Person()
person.printMyName()
*/

// making person1 class inherit the propety form the Human class
class Human{
    constructor() {
        this.gender = "male";
    }

    printgender(){
        console.log(this.gender);
    }
}

class person1 extends Human{
    constructor() {
        super(); 
        this.age = 12;
    }

    printAge(){
        console.log(this.age);
    }
}
const age = new person1();
age.printAge();