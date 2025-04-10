//Saare Control flow ke baare me padhte h 

// if

const isUserloggedIn = true
const temperature = 41


// if (temperature < 50 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// if(2 === "2"){
//     console.log("Execute");
// }

// <, >, <=, >=, ==, !=, ===, !==    //ye saab Comparison ka Kuch Operator h

const score = 200

if (score > 100) { 
    let power = "fly" //but agar var power karte to haam power ko bahar bhi use kar skte the Kyuki wo yha globaly assign ho jata h
    console.log(`User power: ${power}`);
}

//console.log(`User power: ${power}`); //power ka scope yha tak nhi h ye sirf if ke andar tak he scope rahega power ka 


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); //short hand Notation to use if condition  ye sirf ek he line me Execute hota h but tarika h yha pe haam do-teen line ko bhi ek line me ban ke bhi likh sakte hv using , isko use kar ke kaam kar skte h  But this is not good Practice



// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}


if (loggedInFromGoogle || loggedInFromEmail) { //ya to wo google se login karle ya phir email se login karle
    console.log("User logged in");
}
