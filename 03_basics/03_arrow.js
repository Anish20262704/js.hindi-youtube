const user = {
    username: "Anish",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // current contest ko jaab bhi refer kar rahe ho to this. ka use karlo wo curretn contest ko point karge agar wo variable baad me change bhi ho gya to matlab nhi wo current contest tha uska he value ko wo lega 
        console.log(this); // yha sirf this ko print krane pe ye this current contest ko print kardega 
    }
   // this keyword current contest bnata h
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()//haam user function ke andar username ko cvhange kar deye h to wha this wala uss contest ka baat kar rha h but wo already change ho gya h to directly this naya wala value ko he liga jo uus contest me he h sirf

// console.log(this);//aab yha pe current Contest kya hoga ??=>{} h because hamara this abhi node enviroment ko refer kar rha h

// aab  ARROW Func ko dekhte h

//function chai(){
    let username = "hitesh"
   // console.log(this);  // jab this ko kisi function ke andar print karte h to bahut chiz aata h
    // console.log(this.username); //iska answer undefined aaye because hamra this wala chiz sirf Object ke andar he lag pata h baas haam function per this use nhi kar sakte h
//}

// // chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);//undefined dega kyuki this. function ke variable per nhi lagta h
//     console.log("anish");
    
// }
// chai();

//function ko declare karne ka naya tarikaa using arrow Function technique

const chai =  () => { //function(){} ko change kardo () => {} // arrow function me change ho jayega 
    let username = "hitesh"
    console.log(this);
    console.log(this.username); //yha bhi undefined he aana chaiyee kyuki abhi bhi haam function per he lga rahe h
}

//chai()

// arrow function ho phir regular function ho dono jagah this. something ka value undefine dhe aata h and this ka {} he atta h yha se interviwer puchta h question acha khasa



/**********************PURE ARROW FUNCTION PER CHARACHA KARTE H AAB*******************/

 //()=>{} syntax of arrwo function

 // 1-basic arrow function ka declaration

// const addTwo = (num1, num2) => {
//     return num1 + num2  // haam yha explictly return kar rahe h
// }

// console.log(addTwo(5,2));

//2-> implecitly return arrow function

//const addTwo = (num1, num2) =>  num1 + num2 //ek line ka return h to aise bhi likh sakte h

//3-> return kardega num1+num2 ko  means {} use hua to apka return keyword use karna he hoga

//const addTwo = (num1, num2) => (num1 + num2) //react me bahut use hota h to important h

//4->returning object using arrow function

const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()