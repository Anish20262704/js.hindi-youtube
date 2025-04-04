//****************************About NUMBER OBJECT*******************************/

/*const score = 400
console.log(score);
console.log(typeof(score));//yha simple number type aa rha h 


const balance = new Number(100)//yha pe basicaaly haam bolte h ki new Object define kar raha hu jo ke number Type ka h
console.log(balance);
console.log(typeof(balance));//yha type Object aa rha to mere pass bahut saara Aab method pra hoga usko explore karte h aab iska bahut saara protoTypes Present ho ga usko dekhte h

console.log(balance.toString());
console.log(typeof(balance.toString()));// aab String type me aa jayega

console.log(balance.toFixed(2)); // Particular Fix Decimal tak value De dega

const otherNum = 23.8966

console.log(otherNum.toPrecision(3));//toPrecision karta kya h ye pta karna MDN per jaa ke

const otherNum2 = 123.8966
console.log(otherNum2.toPrecision(3)); //ye wala interview me puchta h interviewr to dhyan dena yha 124 kaise aaya 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //ye mast chiz h Direct haam Sidha Dekh ke Bta skate h exact kya Value h readlability Increase ho gya h kha

*/
/*********************************MATH OBJECT********************************* */

//iskee andar bhi bahut function /Method Hota h
console.log(Math); //Capital M is Neccesary 
console.log(Math.abs(-4));
console.log(Math.round(4.3));

console.log(Math.ceil(4.2));// 5 aayega 
console.log(Math.floor(4.8));// 4 aayega 

console.log(Math.min(4,3,1,6));
console.log(Math.max(4,3,1,6));

//sabse Importan mayh.rondom hota h ye dhyan dena 
console.log(Math.random()); // ye hamse 0 and 1 ke bich me he arahat h and hamse unique value dega
console.log(Math.random());

//but agar haamko aisa System Chaiyee ke Ye DO Value ke bich me he haamko value chaiyee to 
console.log((Math.random()*10)+1);  //Ab jo bhi value Hoga Wo 1 se 10 ke bixh me he hoga
console.log(Math.floor(Math.random()*10)+1); 
//Lekin sahi tarikaa ye h Agar haam ko do value ke bich me Koi Bhi random value Chaiyee toString

const min = 10
const max = 20

 console.log(Math.floor(( Math.random()*(max-min+1))+min));

