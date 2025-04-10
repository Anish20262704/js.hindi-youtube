// Immediately Invoked Function Expressions (IIFE) => matlab jaise  apne function likha usko immeduately aapko invoked karwana h

function chai(){

    console.log('DB CONNECTED');
    
}
//chai()

//ye uppar wale method me bhi function turant invoked ho gya h but tabhi thoda late karta h

// but haamko immediately chai() function ko invoked karna h to kya karege 

( function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
} ) ();
  
//()()  iife wala ka syntax 
//(ye first parenthis me hham function ka definition likhte h)(ye wala parenthis hota h for excution jaise haam chai() me parenthis lgate h)

//reason behind using iife -> ek do defintion hoga ke jo bhi function ko likhe h uska immediatly call ho jaye isliye use karte h but ye Second wala Defintion jada Imprtant h -> globval scope ke pollution ke problem hota usko he hatane ke liye iife ka use karte h


(() => {
    console.log(`DB CONNECTED TWO`);  //yha to error aa rha h to iska matlab ye ha ki iife me joo haam function likhte h wo arrao function hoga to error aayega ?? -> nhi bhai niche dekho uska solution
} )();//yha ; ke chale error aa rha tha 
 
( function aurcode(){
    console.log(`DB CONNECTED THREE`);  //yha bhi erro aa rha h arrow function ko hta deye h  error dono uper and abhi wale function me error ; ke chalte aa rha h na ki aise he kyuki iife ko pta he nhi chalega ke kah rukna h
} )();//yha ; ke chalte error aa rha tha kabhi kabhi system ; ko by default consider bhi karlete h .. ; isse hoga ke first code end ho jaye takii niche wala function per bhi jaa sake basically ; ko function  jo invoked hua h usko end karne ke liye lgate h


( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//jaise chai('hitesh) waise hi upper likhe h

//INTERVIEW QUESTION => jaab bhi Do iifee function likht h to kay karet h to yha pakka yaad rakahan  pahale wale iife call hone ke baad ; use karlena taaki second iifee call ho sake nhi to first wala iife function call he nhi hoga kyuki first wala iife wala function end he nhi hua h