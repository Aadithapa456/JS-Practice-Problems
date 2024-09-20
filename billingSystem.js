function restaurant_calculator(num1, operator, num2) {
   //Write your code here
   switch (operator) {
      case "+":
         return num1 + num2;  
         break;
      case "-":
         return num1 - num2;
         break;
      case "*":
         return num1 * num2;
         break;
      case "/":
         return num1 / num2;
         break;
      default:
         break;
   }
}
console.log(restaurant_calculator(4,"+",5));
console.log(restaurant_calculator(4,"-",5));
console.log(restaurant_calculator(4,"*",5));
console.log(restaurant_calculator(4,"/",5));