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