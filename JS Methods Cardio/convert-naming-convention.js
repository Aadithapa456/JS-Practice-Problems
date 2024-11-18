function changeToCamelCase(userInputString) {
  let camelCaseInput = document.querySelector("#camel-case");
  let camelCase = userInputString
    .split(" ") // Splits the string into an array
    .map((char, index) => {
      return index === 0
        ? char.charAt(0).toLowerCase() + char.slice(1) // First letter remains lowercased
        : char.charAt(0).toUpperCase() + char.slice(1);
    })
    .join("");
  camelCaseInput.value = camelCase;
}

// Pascal Case
function changeToPascalCase(userInputString) {
  let pascalCaseInput = document.querySelector("#pascal-case");
  let pascalCase = userInputString
    .split(" ") // Splits the string into an array
    .map((char, index) => {
      return char.charAt(0).toUpperCase() + char.slice(1).toLowerCase(); // Capitalizes first letter and rest remains lowercase
    })
    .join("");
  pascalCaseInput.value = pascalCase;
}

// Kebab Case
function changeToKebabCase(userInputString) {
  let kebabCaseInput = document.querySelector("#kebab-case");
  let kebabCase = userInputString
    .split(" ")
    .map((char, index) => {
      return char.toLowerCase();
    })
    .join("-");
  kebabCaseInput.value = kebabCase;
}

// Snake Case
function changeToSnakeCase(userInputString) {
  let snakeCaseInput = document.querySelector("#snake-case");
  let snakeCase = userInputString
    .split(" ")
    .map((char, index) => {
      return char.toLowerCase();
    })
    .join("_");
  snakeCaseInput.value = snakeCase;
}

let userInputButton = document.querySelector("#user-input");
userInputButton.addEventListener("input", (e) => {
  updateValues(e.target.value);
});
function updateValues(userInputString) {
  changeToCamelCase(userInputString);
  changeToPascalCase(userInputString);
  changeToSnakeCase(userInputString);
  changeToKebabCase(userInputString);
}
