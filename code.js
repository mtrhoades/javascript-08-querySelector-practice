// The Warm Up
// 0. Replace the variable 'yourName' with your name
const credit = document.querySelector("#credit");
let matthewRhoades = "Peter Parker";
credit.textContent = `Created by ${matthewRhoades}`;

// COMPLETE THE HTML
// 1. Append watermelon, grapes, and strawberries to the menu-container
// watermelon is done as an example

// 1b. Create divs and append watermelon to the page
// *** type your code here ***

const menuContainer = document.querySelector(".menu-container");

function addHTML(fruit) {
  let fruitDiv = document.createElement("div");
fruitDiv.innerHTML = `<div class="menu">
<h3>${fruit}</h3>
<img class ='fruit' src="assets/images/${fruit}.jpeg" alt="${fruit}">
<div class="button-container">
    <button id="minus-${fruit}">-</button>
    <button id="add-${fruit}">+</button>
</div>
</div>`;

menuContainer.appendChild(fruitDiv);

}

addHTML("apples");
addHTML("oranges");
addHTML("bananas");
addHTML("watermelon");
addHTML("strawberry");
addHTML("grapes");


// let watermelonDiv = document.createElement("div");
// watermelonDiv.innerHTML = `<div class="menu">
// <h3>Watermelon</h3>
// <img class ='fruit' src="assets/images/watermelon.jpeg" alt="watermelon">
// <div class="button-container">
//     <button id="minus-watermelon">-</button>
//     <button id="add-watermelon">+</button>
// </div>
// </div>`;

// menuContainer.appendChild(watermelonDiv);

// ^ turned into above function for all watermelon, grapes, straberries divs.

// EDIT THE CSS
// Update Fruit Images with Javascript

// 2a. create a new variable named fruitImages and set it equal to a document.querySelectorAll to select all images with a class of 'fruit'
// *** type your code here ***

let fruitImages = document.querySelectorAll('.fruit');

// 2b. Use a For Loop or forEach higher order function to change each fruit's width to 20vw & height to 20vw  // hint: style.width = "20vw"
// *** type your code here ***

// for loop:

// for (let i = 0; i < fruitImages.length; i++) {
//   fruitImages[i].style.width = "20vw";
//   fruitImages[i].style.width = "20vh";
// }

// or with .forEach:

fruitImages.forEach((fruit) => {
  fruit.style.width = "20vw";
  fruit.style.height = "20vh";
});


// TRACK DATA WITH JAVASCRIPT
// Data
let apples = 0;
let bananas = 0;
let oranges = 0;
let watermelon = 0;
let grapes = 0;
let strawberries = 0;
let total = 0;

// Selectors
// Selectors for each fruit's - and + button
// plus button
const applesPlusBtn = document.querySelector("#add-apples");
const bananasPlusBtn = document.querySelector("#add-bananas");
const orangesPlusBtn = document.querySelector("#add-oranges");
const watermelonPlusBtn = document.querySelector("#add-watermelon");
const strawberryPlusBtn = document.querySelector("#add-strawberry");
const grapesPlusBtn = document.querySelector("#add-grapes");

// *** type your code here ***
// minus button
const applesMinusBtn = document.querySelector("#minus-apples");
const bananasMinusBtn = document.querySelector("#minus-bananas");
const orangesMinusBtn = document.querySelector("#minus-oranges");
const watermelonMinusBtn = document.querySelector("#minus-watermelon");
const strawberryMinusBtn = document.querySelector("#minus-strawberry");
const grapesMinusBtn = document.querySelector("#minus-grapes");

// *** type your code here ***
// quantity display
const applesQuantityDisplay = document.querySelector("#qty-apples");
const bananasQuantityDisplay = document.querySelector("#qty-bananas");
const orangesQuantityDisplay = document.querySelector("#qty-oranges");
const watermelonQuantityDisplay = document.querySelector("#qty-watermelon");
const strawberryQuantityDisplay = document.querySelector("#qty-strawberry");
const grapesQuantityDisplay = document.querySelector("#qty-grapes");

// *** type your code here ***
const grandTotalDisplay = document.querySelector("#qty-total");



// +/- Button Event listeners
// 3a. Add Event Listeners for Each Fruit's - or + sign
// 3b. Add Javascript that updates each fruit's count and the total count  // hint: textContent

applesPlusBtn.addEventListener("click", function () {
  apples++;
  total = apples + bananas + oranges;
  applesQuantityDisplay.textContent = apples;
  grandTotalDisplay.textContent = total;
});

applesMinusBtn.addEventListener("click", () => {
  if (apples > 0) {
    apples--;
    total = apples + bananas + oranges;
    applesQuantityDisplay.textContent = apples;
    grandTotalDisplay.textContent = total;
  }
});

bananasPlusBtn.addEventListener("click", () => {
  bananas++;
  total = apples + bananas + oranges;
  bananasQuantityDisplay.textContent = bananas;
  grandTotalDisplay.textContent = total;
});

bananasMinusBtn.addEventListener("click", () => {
  if (bananas > 0) {
    bananas--;
    total = apples + bananas + oranges + watermelon + grapes + strawberries;
    bananasQuantityDisplay.textContent = bananas;
    grandTotalDisplay.textContent = total;
  }
});

orangesPlusBtn.addEventListener("click", () => {
  oranges++;
  total = apples + bananas + oranges + watermelon + grapes + strawberries;
  orangesQuantityDisplay.textContent = oranges;
  grandTotalDisplay.textContent = total;
});

orangesMinusBtn.addEventListener("click", () => {
  if (oranges > 0) {
    oranges--;
    total = apples + bananas + oranges + watermelon + grapes + strawberries;
    orangesQuantityDisplay.textContent = oranges;
    grandTotalDisplay.textContent = total;
  }
});

watermelonPlusBtn.addEventListener("click", () => {
  watermelon++;
  total = apples + bananas + oranges + watermelon + grapes + strawberries;
  watermelonQuantityDisplay.textContent = watermelon;
  grandTotalDisplay.textContent = total;
});

watermelonMinusBtn.addEventListener("click", () => {
  if (watermelon > 0) {
    watermelon--;
    total = apples + bananas + oranges + watermelon + grapes + strawberries;
    watermelonQuantityDisplay.textContent = watermelon;
    grandTotalDisplay.textContent = total;
  }
});

// *** type your code here ***
