"use strict"

const navLinks = document.querySelectorAll("a");
const ul = document.querySelector(".nav");
const liFirst = document.querySelector(".nav-item");

ul.addEventListener("click", event => {
    event.preventDefault()
    console.log("Event at UL");
    console.log(event.target, event.currentTarget);
    if (event.target.getAttribute("href")) {
        const id = event.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" })
    }
}, true)


// function onLogin(event) {
//     console.log(event.target)
// }
// liFirst.addEventListener("click", event => {
//     console.log("Event at First LI")
//     console.log(event.target, event.currentTarget)
// })


// navLinks.forEach(nav => {
//     nav.addEventListener("click", event => {
//         // event.preventDefault()
//         // event.stopPropagation();
//         console.log("Event at Anchor")
//         console.log(event.target, event.currentTarget)
//         const id = event.target.getAttribute("href");
//         document.querySelector(id).scrollIntoView({ behavior: "smooth" })
//     })
// })









// for (let prop in window) {
//     console.log(prop + " : " + window[prop]);
// }

// window.onload = () => {
//     alert("Loaded...")
// }


// let userOne = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 32
// }

// let userThree = {
//     lastName: "Maria"
// }

// let userTwo = {
//     email: "user2@test.com",
//     address: "201 Main road",
//     age: 40
// }

// let newObj = Object.assign({}, userOne, userTwo, userThree)

// console.log(newObj);


// let newObjTwo = {
//     ...userOne,
//     ...userTwo,
//     ...userThree
// }

// console.log(newObjTwo);

// for (let key of Object.keys(user)) {
//     console.log(key);
// }
// for (let value of Object.values(user)) {
//     console.log(value);
// }
// for (let [key, value] of Object.entries(user)) {
//     console.log(key + " - " + value);
// }




// console.log("Starting");
// setTimeout(() => {
//     console.log("3 Seconds passed away ");
// }, 3000);

// const butnStop = document.querySelector("#btn-stop")

// let count = 0;
// let notifier = setInterval(() => {
//     ++count;
//     console.log(count);
// }, 1000)

// butnStop.addEventListener("click", event => {
//     clearInterval(notifier);
// })


// let employee = {
//     company: "Deloitte"
// }


// let foo = {};

// foo.__proto__ = employee;

// console.log(foo.company);



const idOne = Symbol("id")
const idTwo = Symbol("id")

// console.log(idOne === idTwo);

let user = {
    [idOne]: "userID1012",
    sibling: true,
    name: "John"
}

for (let prop in user) {
    console.log(prop)
}

// console.log(user);