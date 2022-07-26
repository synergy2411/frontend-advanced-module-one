// console.log(1 + '2' + 3 - 3);

// console.log(2 + "1" + 1 - 1);


// console.log(30 > 20 > 10 === false);

// false Value -> undefined, null, 0, false

// console.log(0 === false)
// var x = 0;

// var x = {};

// var x = null;


// if (x) {
//     console.log("Greater than zero");
// } else {
//     console.log("Not greater than Zero");
// }



// console.log('20' === 20);


// console.log(100 + ('25' - 25) + 10);


// var x = y = 20;

// console.log(x, y);

// var x = 100;
// console.log(typeof (x));

// x = "HEllo"
// console.log(typeof (x));

// x = function () { }

// console.log(typeof (x));

// x = new Array(1, 2, 3, 4)
// console.log(typeof (x));

// x = { name: "Foo" }
// console.log(typeof (x));



// Creational Phase - allocates the memory

// Executional Phase - executes the code

// let, const & var

// function demo(arr) {
//     if (arr.length > 2) {
//         let load = "LOADING"
//         console.log(flash);
//     } else {
//         let flash = "FLASHING"
//     }
// }

// demo([2, 3, 4, 5]);



// const USERNAME = "Foo Bar";

// USERNAME = "Bar Bam";


// const user = {
//     name: "Foo"
// }

// user = {
//     name: "Baz"
// }

// user.name = "Bar";

// console.log(user);          // ?



// const fruits = ["apples", "kiwi", "oranges"];

// fruits.push("Guava")

// console.log(fruits);





















// Operators & Precedence
// Strings & Template Literals

// let username = "John Doe";
// let age = 32;


// const str = `Hello there, I 'm ${username}


// !

// I'm ${age} years old
// ..


// `;

// console.log(str);
























// Type Conversion & Coercion
// const age = Number(prompt("Pls enter your year of birth"));

// const retirementAge = 2037 + age;

// console.log(retirementAge);






// Conditional & Loops
// Document Object Model




// console.log(guess.value);

// const heading = document.querySelector(".heading");
// console.log(heading.innerHTML);
// heading.innerHTML = "Hello World";




// Back tick -> ` ` || ' ' || " "

// let username = "John Doe"

// let greet = `Hello ${username}`

// let sayHi = "Hi " + username;
// "use strict";









// Objects =
//  - Literal

// let box = {
//     width: 4,
//     height: 8,
//     color: "grey",
//     destination: {
//         city: "Pune",
//         street: "201, Main Road, Wakad"
//     },
//     books: ["book1", "book2", "book3"],
//     "is Delivered": false,
//     addBook: function (newBook) {
//         this.books.push(newBook);
//     }
// }
// // dynamic property adding
// box.volume = box.width * box.height;

// // Square bracket notation
// console.log("Delivery : ", box['is Delivered']);
// console.log(box['color']);

// // Dot notation
// console.log(box.volume);
// console.log(box);

// box.addBook("book4")

// console.log(box.books.length);          // ?

// Reference vs Primitive

// let x = 201;
// let y = x;

// x = 301;

// console.log(x, y);



// let x = {
//     email: "test@test.com"
// }

// let y = x ;
// y.age = 32
// x.name = "foo";

// console.log("X ", x);
// console.log("Y ", y);





























//  - Contructor

// function Person(firstName, lastName) {
//     // let this = {};
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function () {
//         return `Hello ${this.firstName} ${this.lastName}`;
//     }
//     // return this;
// }


// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getDetails(){
//         return `Welcome ${this.firstName} ${this.lastName}`;
//     }
// }



// let foo = new Person("Foo", "Bar");
// console.log(foo.getFullName())

// let bar = new Person("Bar", "Baz");
// console.log(bar.getFullName());


























//  - Instance -- Object.create()

// let shoe = {
//     size: 8,
//     construction: "Sneaker"
// }

// let magicShoe = Object.create(shoe);
// magicShoe.cize = 11;
// console.log(magicShoe.size);
// console.log(shoe);



// function Animal(legs, species, harbivorous) {
//     this.harbivorous = harbivorous;
//     this.legs = legs;
//     this.species = species;
//     // this.getDetails = function(){
//     //     return `${this.species} is having ${this.legs} legs!`
//     // }
// }

// Animal.prototype.getDetails = function () {
//     return `${this.species} is having ${this.legs} legs!`
// }


// let kitty = new Animal(4, "Cat", false);
// console.log(kitty.getDetails())


let userOne = {
    age: 32,
    address: "201 Main Road"
}

let userTwo = Object.create(userOne);


console.log(userOne.isPrototypeOf(userTwo))
console.log(userTwo.isPrototypeOf(userOne))

console.log(Object.prototype.isPrototypeOf(userOne))
console.log(Object.prototype.isPrototypeOf(userTwo))


console.log(userTwo.hasOwnProperty('age'))
console.log(userOne.hasOwnProperty('age'))

console.log(userOne);