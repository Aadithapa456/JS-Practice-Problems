function calculate_total_treasures(start_clue, final_clue) {
   // Your code should be below
   let sum = 0;
   for (let i = start_clue;i<=final_clue; i++) {
        sum += i;
   }
   return sum;
   // Your code should be above
}
console.log(calculate_total_treasures(3,7));
