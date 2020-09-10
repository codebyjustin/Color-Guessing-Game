let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();

const displayColor = document.querySelector("#displayColor");
const sqaures = document.querySelectorAll(".square");
const message = document.querySelector("#message");
const resetButton = document.querySelector("#reset");
const h1 = document.querySelector("h1");
const modeButtons = document.querySelectorAll(".mode");

displayColor.textContent = pickedColor;

init();

function init() {
  //mode button event listeners
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick new random color from array
  pickedColor = pickColor();
  //change displayed color to match pickedColor
  displayColor.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  message.textContent = "";
  //change square colors
  for (let i = 0; sqaures.length; i++) {
    if (colors[i]) {
      sqaures[i].style.backgroundColor = colors[i];
      sqaures[i].style.display = "block";
    } else {
      sqaures[i].style.display = "none";
    }
  }
}

for (let i = 0; i < sqaures.length; i++) {
  //add initial colors to squares//
  sqaures[i].style.backgroundColor = colors[i];
  // add click listeners to squares
  sqaures[i].addEventListener("click", function () {
    //grab color of clicked square
    let clcikedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clcikedColor === pickedColor) {
      message.textContent = "Correct !";
      changeColors(clcikedColor);
      h1.style.backgroundColor = clcikedColor;
      resetButton.textContent = "Play Again ?";
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (let i = 0; i < sqaures.length; i++)
    //change each color to picked color
    sqaures[i].style.backgroundColor = color;
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make array
  let arr = [];
  //repeat num times
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener("click", function () {
  reset();
});
