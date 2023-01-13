let inputString = "";
let btnConvert = document.getElementById("convert-btn");

btnConvert.addEventListener("click", function () {
  inputString = document.getElementById("text").value.toLowerCase();
  let str = inputString;

  let words = str.split(" ");

  let string = words;

  // Camel Case
  (function camel() {
    for (let i = 1; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }

    let camelCase = string.join("");

    document.getElementById("camel-case").innerHTML = camelCase;
  })();

  // Pascal Case

  (function pascal() {
    for (let i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }

    let pascleCase = string.join("");

    document.getElementById("pascal-case").innerHTML = pascleCase;
  })();

  // Snake Case
  (function snake() {
    let string = words;

    let snakeCase = string.join("_").toLowerCase();
    document.getElementById("snake-case").innerHTML = snakeCase;
  })();

  // screaming-snake-case
  (function ScreamingSnakeCase() {
    let screamingsnake = string.join("_").toUpperCase();
    document.getElementById("screaming-snake-case").innerHTML = screamingsnake;
  })();

  // kebab-case
  (function snake() {
    let string = words;

    let kebabCase = string.join("-").toLowerCase();
    document.getElementById("kebab-case").innerHTML = kebabCase;
  })();

  // screaming-kebab-case
  (function ScreamingSnakeCase() {
    let screamingKebab = string.join("-").toUpperCase();
    document.getElementById("screaming-kebab-case").innerHTML = screamingKebab;
  })();
});
