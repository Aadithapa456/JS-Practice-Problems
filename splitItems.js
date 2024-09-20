function split_shopping_cart(cart_items, split_index) {
   return cart_items.slice(split_index);
}
console.log(
   split_shopping_cart(["apple", "banana", "orange", "grape", "pear"], 2)
);
