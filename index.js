// Your code here

let dodger = document.getElementById("dodger");

function moveDodgerRight() {
  let numbers = dodger.style.left.replace("px", "");
  let right = parseInt(numbers, 10);

  if (right < 360) {
    dodger.style.left = `${right + 1}px`;
  }
}

function moveDodgerLeft() {
  let numbers = dodger.style.left.replace("px", "");
  let left = parseInt(numbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});