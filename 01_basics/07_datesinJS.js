//DATES
// let myDate  = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //interview me ouchta h ye wala 

//2nd Method to Declare Dates
// let date2 = new Date(2025,3,18) // apna khud aka date dena ho to format me (year,month,date,time) and yha pe month 0 se start hota h
// console.log(date2.toString());

//3rd method
// let date3 = new Date("2023-01-15")//yha YY-MM-DD karte h to yha month 01 se start hota h
// console.log(date3.toLocaleString());


let myTimeStamp = Date.now()
//console.log(myTimeStamp); //ye to Time Joo aa rha h wo  1 jan 1970 se aa rha h by deafult haamko aisa karna h ke koi particular date se aaj tak  ka dates ka time nikal na h to kya kare 

let date4 = new Date(2025,3,5)


//console.log(date4.getTime());  // milli second me timee aa jaa rha h koi particular date ka 1 jan 1970 se

//jo time aa rha h Date.now() se haam usko milli second se second me lana chhate h
 console.log(Math.floor(Date.now()/1000));  //fllor use karleye kyuki decimal wale ko hatana chha rahe the
 
 //basically Date Object me getter and setter ko dekhte h
 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth()+1); //+1 kardiye h taaki january 1 dekhe 
 console.log(newDate.getDay());

 //seeter 

 newDate.setFullYear(2024) //yha seeter kar deye h
 console.log(newDate.toString());

//toLocaleString wala Method yha bahut important hota h isko aur dekhte h ache se

newDate.toLocaleString('default',{
        weekday:"long",
})
 