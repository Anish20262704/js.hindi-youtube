const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10}) //yha filter jaisa nhi h ki condition true hoga tabhi return karega 

//console.log(newNums);

//chaining ka method dekhte h kya hota h -> matlab do-teen choz directly use kar saake and usme haam apna kuch funda lga sake 

const newNums2 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums2);

let num = [1,2,-6,-9]

let item = num.filter((val)=> val>=0).map((val)=>val+5)

console.log(item);

