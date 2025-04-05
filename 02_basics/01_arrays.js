const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

//2nd tarikka for declaring arrays
const myArr2 =  new Array(1,2,3,4)
//console.log(myArr2[1]);


//Arraya methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()

//myArr.unshift(8)//yha insertion hota h Beggining of array me
//console.log(myArr);

//myArr.shift() // removing from starting of array
//console.log(myArr);

//Searching in array //Abhi array ye h [0,1,2,3,4,5]
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr  = myArr.join(); //Simply adds All the elements of an array into string separated by the specified Separator

// console.log(myArr);
// console.log(newArr); //value to same he aaye ga myArr.join() karne se but uska typeof change hojayega

// console.log(typeof myArr);
// console.log(typeof newArr);

//Some important method of array

// Slice and Splice
 console.log("A",myArr);

 const myn1 = myArr.slice(1,3)

 console.log(myn1);

 console.log("B",myArr);

 const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log(myArr); // yha myArr per Splice use karne se haam Original aaray me Remove karte h element


 

 


