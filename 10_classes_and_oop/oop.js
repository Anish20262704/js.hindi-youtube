
//class me basically properties and member Function hota h 

//object literal h kya -> basically ek Object bnanae ko he object literal bolte h 
//Object literal -> iske andar basically kuch nhi property and method hota h sirf

const user = {

    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    //niche wala method h 

    getUserDetails: function(){
      //console.log("Got user details from database");

     //this keyword h kya -> this keyword basically current object ko refer karta h -> this basically current context ko refer karta h 
       
     console.log(`Username: ${this.username}`);
     //this se pura current context print ho jayega 
         console.log(this);
    }

}



console.log(user.username)
console.log(user.getUserDetails());
// console.log(this);


// TASK -> make a user object its value may change depending upon the situation so we make function so that we can easily make object based on our flexibility


//ikso Constructor Function bolte h -> basically ek function hota h jo object banata h
//Constructor Function -> isko hum new keyword ke sath use karte h -> new keyword se ek naya object banata h
//Constructor Function ka naam hamesha capital letter se shuru hota h -> ye ek convention h
//Constructor Function ke andar this keyword ka use hota h -> this keyword se current object ko refer karte h

//constructor function bna rahe h niche yha pe

function User(username, loginCount, isLoggedIn){

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

  //jo object tha na usko pass kardiya h this keyword me jo modified object hoga wo store hoga and hum usko return kardeye h  
    return this

}

  //new isliye use kiye h taaki ye user ek naya object baane -> new basically Constructor function h 

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

//new keyword use karna he hoga taaki ye ek naya object banaye HAR BAAR nhi to sirf overwrite karte rahe ga to bekar chiz he h na -> new se User ka ek naya instance create hoga haar baar 

//thats why importance of new keyword

// console.log(userOne.constructor); //.constructor property hota kya h -> refernce he hota h khud ke he baare me 
//console.log(userTwo);

