// function calculate_arrangements(n) {
//    // Your code should be below
//    let fact = 1;
//    for (i = n; i > 0; i--) {
//       fact *= i;
//    }
//    return fact;
//    // Your code should be above
// }
// console.log(calculate_arrangements(5));

//Using Memoization concept
const memo = {};
let num;
let doAgain;
function calculate_arrangements(n) {
   if (n in memo) {
      return memo[n];
   }
   // Code below checks if key n-1 is present in memo if yes than it will implement the formula n*(n-1)!
   if (n - 1 in memo) {
      return memo[n - 1] * n;
   }
   if (n <= 1) {
      return 1;
   }
   memo[n] = n * calculate_arrangements(n - 1);
   return memo[n];
}
console.log(calculate_arrangements(5));
// console.log(memo);

do {
   num = prompt("Enter a number");
   console.log(calculate_arrangements(num));
   doAgain = prompt("Do you want to continue? True for yes, False for No");
} while (doAgain);