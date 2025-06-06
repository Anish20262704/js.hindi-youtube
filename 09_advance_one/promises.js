
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)

})
    

promiseOne.then(function(){
    console.log("Promise consumed");
})


//yha niche wale  me hum koi variable me store nhi kiye h to directly hum .then() lga sakte h ...yha hum ek he part me kaaam kar liye h without taking any use of extra variable 

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)


}).then(function(){

    console.log("Async 2 resolved");

})


const promiseThree = new Promise(function(resolve, reject){

       setTimeout(function(){
        //resolve me hum ek Object pass kar rahe h as a parameter ke dekhte h 
           resolve({username: "Chai", email: "chai@example.com"})
        }, 1000)

})

//yha user me jo hum upper object pass kiye h woo aaaya hoga yha pe

 promiseThree.then(function(user){
      console.log(user);
 })



const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){

        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)

})

//.then() ka chaining sikhte h yha pe and jaab bhi chaining perform karte h to new line pe karte h taaki thoda readablity acha aa jaata h

promiseFour
 .then((user) => {

    console.log(user);

    return user.username

 //yha niche wale .then() me jo parameter hogya wo upper wale .then() wala function return kara hogay wo jayega 
}).then((username) => {
    console.log(username);
    //reject call hoga to wo direct catch ko call karega 
}).catch(function(error){

    console.log(error);
  
    //finally humko x amount of time ke baad bta dena ke jo hona tha wo hogya h na  

}).finally( () =>{ console.log("The promise is either resolved or rejected")} )




const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)

});

//.then() and .catch() wala bhi ek method h promise ko discribe karne ka ya phir yha hum directly async-await ke andar try catch ka use karke bhi promise ko handle kar skte h easily

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

//asyn-await wala jaab bhi likhte h to function call karna he parta h 

consumePromiseFive() //function call karte h jo ki hum us function ko async bnaye rakhe hue h 


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        //await keyword use karliye h kisi ke aage to jaab tak wo pura nhi aa gya tab tak wha se code ka execution aagye nhi bade ga 
        const data = await response.json() //jo API se data aa rha h wo string me aa rha hoga to uska Object me convert kardiye h .json se
        
        console.log(data);

    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()


//ye upper wala to humara try catch se likhe liye jaab kisko ko fetch karke laye h but same chiz ko then and catch me kaise likhe gye ye niche dekhte h 

//ye directly hum .then() fetch per use kyu katrrahe ->> basically humko jo response type aayega ye URL ka wo Promise type h isliye hum directly .then() use kar parahe h URL ke promise type pe 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
    //ye jo niche walaa then me upper wala then jo return kiya hoga wahi jata h 
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.ṇ