const products = [
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Tablet", price: 300, quantity: 3 },
  { name: "Headphones", price: 100, quantity: 4 },
];
let totalCost = products.reduce((accumulator, product) => {
  return accumulator + product.price * product.quantity;
}, 0);
console.log(totalCost);
