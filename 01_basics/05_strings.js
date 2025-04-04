 //const name = "hitesh"
// const repoCount = 50

//console.log(typeof(name));

//TO concinate this two string we do This 
//console.log(name+repoCount+ "value");//yha pahala wala String h to 50 bhi as a string consider hone lage ga 

//ye wala concination ke liye sabse acha h and Jada tar iski ko use karte h to yaad rakhna 

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//isko string intrupulation bola jata h

//another way to declare String 
const gameName = new String('Anish-Sh-kum')//yha ye String ek Object ban gya h basically Haam is tarah String Ko declare karke haam bahut sara Chiz(method aur Properties) nikal sakte h Jaab Yha String ka Object ban Chuka hogaa tab .. and yha key and Value ka piar ban jata h console per ka ke dekh sakta h brower pe 


//iske kuch Method aur Property ko dekhte h LIKE
//to check Types of "Anish-sh" string
console.log(typeof(gameName));

//Do this task Go through Some Method of String to get More clarification on  This Concept  Jo below are Some Imporatant Method of String
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());//Touppercase use karne se Original String change nhi hua hoga ye aDhyan Dena 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,4);//slice and Substrin g same baas Slice me haam negative value se start kar skte h likereverse se start ho jayega 
console.log(anotherString);

const anotherString2 = gameName.slice(-7,4);//from 7th last to 4 pos from starting
console.log(anotherString2);

// str.slice(-7, -2)
// From 7th last to 2nd last

const newStringOne = "   hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Anish.com/Anish%20Shrivastava"

console.log(url.replace('%20','-'));

console.log(url.includes('Shivam'));

console.log(gameName.split('-'));












