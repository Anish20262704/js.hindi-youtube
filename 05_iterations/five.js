//for Each Loop dekh lena ye wala loop bhi 

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val); //coding.forEach(yha mere ko ek callback function dedo jo btaye mujhe kya karna h)
// } )

//call back function me function ka naam nhi hota h 

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

//coding.forEach(printMe)//baas yha pe haam printme function ko bhar likh deye h only

//printMe() ..() matlga dena haamko sirf us function ka reference dena baaki ka kaam wo khud karlega 

//forEach function ke pass sirf item ka he nhi accesss hota h balki haam forEach me item ,index and arr ye saab ka access milta h 

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);    //ye acha chiz h tab to 
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

//simple syntax to learn arrow function syntax 
myCoding.forEach( (item) => console.log(item.languageName)) //ek lone me likhna sikho arrow function ko