function is_integer_coin_count(coins) {
    // Your code should be below
    if(parseIntNumber.isInteger(coins)){
        return true;
    }
    else{
        return false;
    }
    // Your code should be above
}
console.log(is_integer_coin_count(22));
console.log(is_integer_coin_count("22"));