const button = document.querySelector(".container .btn");
const jokeDiv = document.querySelector(".container .joke");


button.addEventListener("click", getJock);

async function getJock() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  document.getElementById("joke").innerHTML = jokeObj.joke;
  
}