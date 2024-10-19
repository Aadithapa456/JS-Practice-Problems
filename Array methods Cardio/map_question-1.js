const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const newNums = numbers
   .map((number) => {
      return number * 2;
   })
   .map((number) => number + 2)
   .filter((number) => number > 4);
console.log(newNums);
