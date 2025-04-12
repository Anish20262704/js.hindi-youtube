// for of

// ["", "", ""]     //arayof string h ye 
// [{}, {}, {}]     // array of object h ye 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// // Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "nepal") //IN wala ko overwrite kardega


//console.log(map); //isse print kra ke jarur dekhan kasia aa rha map wala acha h c++ jaisa nhi h ki saab chiz lekho ke key ka datatype and value ka dtatype

for (const key of map) {
  //   console.log(key);
}

for (const [key, value] of map) { //synatx h key and value ko alag alag leneka
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//same joo map per iterate kra rahe wo directly yha iterate nhi hoga object per iterate krane ke liye haam aage dekhe ge kaise iterate karte h object ke upper


for (const [key, value] of myObject) {
    console.log(key, ':-', value);//yha pe error aa gya h  so iss tarah se haam Object per iterate nhi kra sakte h
}