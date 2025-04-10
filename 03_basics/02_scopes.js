//var c = 300 //var scope ke bahar bhi accesable hota h isliye var ko kaam use karta h haam 

let a = 300

// if (true) {
//     let a = 10
//     const b = 20
//     // var c =30
//      console.log("INNER: ", a);  // ye pe 'a' ka block scope aayega 
    
// }

//console.log(a);    //yha pe 'a' ka global scope aayega 
//console.log(b);  //agar be ko print kraye ga to error aayega kyuki a to block scope me he declare h baas to phir bhar accesable nhi hoga
//console.log(c);


//Nested Scope ke baare me dekhte h yha pe 


function one(){
    const username = "Anish"

    function two(){
        const website = "youtube"
      
        console.log(username); // to ek baat pta chala andar wala function bhar wala function jo ke nested h to andar wala function bhar wale Function ko cheez ko access karpata h
                               //nested function jo hota h wo parent function ke varible ko access kar pata h
    }

    // console.log(website);//isko execute krayege to error aajayega bolega ke website to hai he nhi kyuki wo to upper two me sirf block variable ke taur pe h to useke bhar to accesible he nhi hoga

     two() // ye yaad he rakhan jaab tak function ko call nhi karege tab tak call function ke andar jayega he nhi

}

 //one()
 
/*
if (true) {

    const username = "Anish"
    if (username === "Anish") {
        const website = " youtube"
         console.log(username + website);
    }
    // console.log(website); // Error Throw karega 

}*/


// console.log(username); //yha bhi pakka error throw karega 


// ++++++++++++++++++interesting => Hoisting ka Concept++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

console.log(addone(8))


//console.log(addTwo(5));// yha error Thro karega kyuki Hoisting Named Function Assignment me kaam Nhi karta h

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(9));
