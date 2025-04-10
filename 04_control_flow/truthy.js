
//INTERVIEW ME TRUTHY AND FALSY VALUE PER BAUT QUESTION BANATA H TO ACHA SE KARNA 

//const userEmail = "anish@4971"
//const userEmail = ""
const userEmail = [] //yha true man liya h TO uska Rule dekhte  h niche 

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//IMPORTANT NOTE H YHA PE KITNA TRUTHY VALUE HOTA H & KITNA FALSY VALUE HOTA H USKO NICHE DEKHTE H

// falsy values

//false, 0, -0, BigInt 0n , "", null, undefined, NaN

 //truthy values
                                           //string ke andar aa ke Kahani badal jata h means string ke andar kuch bhi value enter ho gaye to wo truthy value ho jayega 
// "0", 'false', " ", [], {}, function(){}  //TRUTHY VALUE ME KUCH SURPRIZE WALA ELEMENT BHI HOTA H like surprize wala -> "0" , 'false',



if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {} //object aa jaye to wha kaise empty check karege 

if (Object.keys(emptyObj).length === 0) { //Object.keys(emptyObj) ye basically pura key ka array ban kle aa gya hoga 
     console.log("Object is empty");       // IMPORTANT h ye wala
}

//interview Question abhi yaad karlo aage samaj me aayega 
      // 1-> false == 0  -> true
      // 2-> false == '' -> true
      // 3-> 0 == ''     -> true 


//Nullish Coalescing Operator (??): null undefined yha sirf hamko sirf null and undefined ko he dekhan h yha pe

//NC operator kaam ye karat h ki null value aaya h to uska safety check kardeta h basicaly foll back ke jaab bhi erro aaye to kaise error ko handle kare

let val1;
//val1 = 5 ?? 10          // 5 assign ho jayega 
//val1 = null ?? 10       // 10 assign ho jayega 
//val1 = undefined ?? 15  //15 assign ho jayega 
//val1 = null ?? 10 ?? 20 //10 assign ho jayega 


//console.log(val1);

//Terniary Operator

//condition ? true : false  //ye nullish Operator jaisa bilkul act nhi karta h

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")