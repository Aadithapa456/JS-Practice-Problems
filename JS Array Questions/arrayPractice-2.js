const transactions = [
    {
        type: "credit",
        amount : 84000
    },
    {
        type: "debit",
        amount : 25000
    },
    {
        type: "debit",
        amount : 35000
    },
    {
        type: "credit",
        amount : 92000
    }
]
console.log(transactions.reduce((acc, curr) => {
    let returnAmount = 0;
    returnAmount += curr.amount;
    return acc + returnAmount;
}, 0));