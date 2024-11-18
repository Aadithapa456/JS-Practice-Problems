let prices = [{ price: 50 }, { price: 100 }];
let formattedPrice = prices.map((item) => {
  return (item.price = "$" + item.price + ".00");
});
console.log(formattedPrice);
