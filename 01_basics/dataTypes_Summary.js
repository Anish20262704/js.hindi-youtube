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

console.log(typeof anotherId);//yha pe typeof symbol symbol he aata ha


/***********************memory Space dekhte h yha pe************************/
//Memory allocation ke baare me dekhte h ye aage bhi kaam aayega and inteview ke liye bhi important h

//memory is basicaaly of 2 Types -> Stack and Heap ye dono hota h

//Stack(Primitive) , Heap(Non-Primitive)
//jaab bhi Primitive ko define karega to wo Stack  me jata h and jaab Phir se define karte h to wha pe haamko Copy milta h naaa ke Original milta ha 
//and wahi jaab Non-primitive ko  declare karta h to wha pe Heap me wo declare hota h wahi per jaab reDeclare karega to wo Original Position ka refernce he Dedeta h

let myYoutubeName ="Anishkumardot.com"

let anotherName =myYoutubeName
anotherName ="chai aur code"

console.log(myYoutubeName);
console.log(anotherName);


let userOne ={
       email:"user@google.com",
       upi:"user@ybi"
}

let userTwo = userOne

userTwo.email ="anish@google.com"

console.log(userOne.email);
console.log(userTwo.email);
//ye upper wala dono log ko print karo saamaj aa jayega Easily 




