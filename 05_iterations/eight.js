//REDUCE Method in J.S -> isko revise kar lena aage bahut use hoga jaab haam shopping app ka project bnayege to 

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {

    console.log(`acc: ${acc} and currval: ${currval}`);

    return acc + currval

}, 0)

//console.log(myTotal);

const myTotal2 = myNums.reduce( (acc, currval) => acc + currval, 0) //easily arrow function se choota kardeye h

//console.log(myTotal2);

//const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

//console.log(myTotal);


//dekho yha reduce ka bahut use aata h jaab shopping app ka funda aata h to 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//har ek item ek object ko denote kar rha h and haamko usme se price nikalna h

 const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

 console.log(priceToPay);
