import "./style.css";

console.log("Webpack is working!");

const content = document.querySelector("#content");

const heading = document.createElement("h1");
heading.textContent = "Hello Webpack!";

content.appendChild(heading);