// Get the button and the element you want to change the background color of
const button = document.getElementById("button");
const element = document.getElementById("canvas");

// Set the click event on the button
button.addEventListener("click", function() {
  // Generate a random color in the format "rgb(r, g, b)"
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  // Change the background color of the element
  element.style.backgroundColor = randomColor;
});
