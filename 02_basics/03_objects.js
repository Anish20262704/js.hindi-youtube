// singleton // koi bhi constructor se object bante h to singleton object banta h 

// Object.create->ye Object create  karne ka tarika h & issi se singleton banta h 

//important Question for interview -> actually object ko literall ke tarah declare karte h to wha singleton nhi banta h but wahii jaab constructor ke help se declare karte h to singleton banta h


//OBJECT LITERALL ->Object ko declare karne ka tarika h

const mySym = Symbol("key1") //declaration of Symbol 

//OBJECT LITERAL => { }

const JsUser = {
    name: "Hitesh", //basically name bhi backend me as a strig he rahata h "name" baas uske bina bhi kaam chaljata h

    "full name": "Hitesh Choudhary",

    [mySym]: "mykey1", // is tarika se declare karne pe per symbol he rahega niche wale me string me convert ho gya h ...yha Question kya banta h -> ek Sybol lo and Object ke Key me lo and haam ko Print kra ke dekha do
   //mySym: "mykey1" // yha aise declare karega to Symbol symbol nhi rahega wo string me change ho jayegaga  is tarikee se nhi hota h galat tarika h to use Symbol as a key in Object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //access karne ke 1st tarika h
// console.log(JsUser["email"]) //access karne ka 2nd tarika h ye bhi bahut jagh use karte h haam 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) //mySyn: declare karge to typeof string ho jayega and wahii hamara anser galat ho jayega


// JsUser.email = "hitesh@chatgpt.com" //Object ke value ko change karne ka tarika
//  Object.freeze(JsUser) //haam koi bhi chiz ko lock karna chhate hh to iss tarikee se kar sakte h ..ke koi change nhi kar payee
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); //Mera Object freeze hogya h haamko koi error nhimilega But koi change reflect nhi hoga object me

//yha pe haam jsUser me ek naya Function add kar rahe h

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// console.log(JsUser.greeting); // baas ye likhne se ye aa rha h [Function (anonymous)]
//console.log(JsUser.greeting()); 

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this. lagane se jo bhi hamara object h uske property ko access kar skte h
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//ek Important chiz jada tar haamko jaab bhi object ka method use karna hota h to . use karte h lekin kaii specific jagh per haamko [] ka bhi use karna parta h to ye yaad rakhana bahut baar ye hota h ki haamko [] se he solve karna parta h too ye yaad rakhan ache se