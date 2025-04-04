// Your code here
// Get a reference to the dodger element
const dodger = document.getElementById("dodger");

// Function to move the dodger to the left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Ensure the dodger doesn't go past the left edge
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Ensure the dodger doesn't go past the right edge (considering its width of 40px)
  if (left < 360) {  // 400px (game width) - 40px (dodger width)
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener to move the dodger based on keydown events
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
