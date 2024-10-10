let arr = [1, 2, 3, 4, 5, 6, 7];
let requiredElement = parseInt(prompt("What value do you want to search?"));
const findElement = (a, element) => {
  let found = false;
  let ind = 0;
  a.forEach((value, index) => {
    if (element == value) { // checks if the value of element passed on to the function is equal to one of the element of the array
      found = true;
      ind = index;
    }
  });
  return [found, ind]; // Returns array of value from the function
};
let [foundElement, index] = findElement(arr, requiredElement);
console.log(foundElement ? `Value found at index ${index}` : "not found"); // Using a ternery operator where foundElement gives value either true of false
