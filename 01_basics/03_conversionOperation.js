let score ="33abc"
let score2 =null
let score3 =undefined
let score4 = true
//console.log(typeof score);
console.log(typeof (score));//dono same chiz h likanae ka tarikka h

//Jo score abhi h WO String me h but haamko Number me chaiyee to yha conversion wala chiz karge 

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber); //iska answer Nan aayega means me Number me nhi hJo score h to ye jaruri h To Firstly i score is Pure number or not then only i convert it innumber

let valueInNumber2 = Number(score2)
console.log(valueInNumber2);

let valueInNumber3 = Number(score3)
console.log(valueInNumber3);

let valueInNumber4 = Number(score4)
console.log(valueInNumber4);

//"33" => 33
//"33abc"=>NaN
//"true" => 1,false => 0

let isLoggedIn =1
let isLoggedIn2 ="Anish"

let booleanIsLoggedin = Boolean(isLoggedIn)
console.log(booleanIsLoggedin)

let booleanIsLoggedin2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedin2)

//Boolena wala ka
//1=> true, 0=>false
//"" =>false
//"hitesh" => true

//TO change in String 
let someNumber = 33
let stringNumber = String(someNumber)

console.log(someNumber);
console.log(typeof stringNumber);

