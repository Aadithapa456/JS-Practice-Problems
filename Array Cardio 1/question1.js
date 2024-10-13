// Calculate dogs age in human age by using formula:
// If age < = 2 use humanAgeFromDogs = dogAge * 2
// If age > 2 use humanAgeFromDogs = 16 + dogAge * 4

let dogsAge = [8, 6, 9, 12, 13, 11, 1, 12, 10, 2, 4];
let humanAgeFromDogs = [];
let underAgeDogs = [];
function calAveragehumanAgeFromDogs(dogsAge) {
   dogsAge.forEach((dogAge) => {
      if (dogAge <= 2) {
         humanAgeFromDogs.push(2 * dogAge);
      } else {
         humanAgeFromDogs.push(16 + dogAge * 4);
      }
   });
}
calAveragehumanAgeFromDogs(dogsAge);

let adultDogs = humanAgeFromDogs.filter((age) => age >= 18);
let average = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
console.log(`adult Dogs : ${adultDogs}`);
console.log(`Average Adult Dog age : ${Math.round(average)}`);
