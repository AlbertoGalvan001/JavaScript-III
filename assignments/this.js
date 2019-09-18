/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: The value of 'this' is equal to the window or console where JS is running.
* 2. Implicit binding: Whenever a function is called by a preceding dot, the object to the left of the dot is 'this'.
* 3. New binding: When a constructor function is used, 'this' refers to the object that is created and returned by the constructor function.
* 4. Explicit binding: When a JS cal or apply method is used, 'this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myName(name) {
    console.log(this);
    return name;
}
myName("Alberto");
// Principle 2

// code example for Implicit Binding
const anObj = {
    greeting: "Hello all",
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
anObj.sayHello("Ralphie");
// Principle 3

// code example for New Binding
function WallmartGreeter(greeter) {
    this.greeting = "Hello ";
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
    };
}
const Wally = new WallmartGreeter("Welcome to Wallmart!");
Wally.speak();

// Principle 4

// code example for Explicit Binding
function car() {
    console.log(`My ${this.name} likes to go ${this.sound}`);
}
let myCar = {
    name: "Volvo",
    sound: "vrooom"
}
car.call(myCar);