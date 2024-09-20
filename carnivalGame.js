function simulate_carnival_game(max_number) {
   let prizes = [];
   // Your code should be below
   for (let i = 1; i <= max_number; i++) {
      if (i % 3 != 0 && i % 5 != 0) {
         // Checks whether the point is not disivible by both 3 and 5 if yes then pushes the number
         prizes.push(i);
      } else {
         if (i % 3 == 0 && i % 5 == 0) {
            prizes.push("FizzBuzz");
         } else if (i % 3 == 0) {
            prizes.push("Fizz");
         } else {
            prizes.push("Buzz");
         }
      }
   }
   return prizes;
   // Your code should be above
}
// Test case
console.log(simulate_carnival_game(15));
console.log(simulate_carnival_game(10));
console.log(simulate_carnival_game(5));
console.log(simulate_carnival_game(20));
