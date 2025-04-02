// Primitive DataTypes ->ye call by value hota h

//7 types me Hota h : string,Number,boolean,null,undefined,Symbol,BigInt

const score =100 //number Declare
const scoreValue = 100.3

const isloggedIn =false//Boolean declare
const outSidetemp = null //null declare
let userEmail; //aur isko aise bhi likh sakte ho let userEmail = undefined // Undefined declare

const id =Symbol('123')
const anotherId =Symbol('123') 
//Symbol dataTypes ka Exmaple h ye 
console.log(id == anotherId);//false aa rha h Answer

//Symbol() ka kaam yhi hota agar aap value bhi same pass karo ge id and anotherid me to jo id and anotherId me jo value milega wo same nhi hoga

const bigNumber=3458957842654n
//BigInt Declare ye Number ko j.s Store karne ke liye already NigInt ka use karega backend me 




//Reference(Non-Primitive) DataTypes ->ye Saare Wo Value Jisme memory ke address ka Refrence kiya jata h

//3->Types=>Array,Object,Functions

//Array
const heros =["shaktiman","naagraj","doga"];

//Object
let myObj ={
    name:"Anish",
    age:22,
}

//Function ->yha function ko store bhi kar skte h easily

const myFunction = function(){
//defination of function
   console.log("Hello World");
}

//Question->How to check Types of that dataTypes

console.log(typeof outSidetemp);

console.log(typeof myFunction);
//Object aata h Basically usko Function object bolte h

console.log(typeof anotherId);
