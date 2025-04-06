const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //yha pe JS me haamko pta h ki array koi bhi datatypes ek sath store kar skta h to yha kya hua h ki jo marvel_heros wala array h na wo dc_heroes ko ek array data types samaj ke store kar leya h
//push exsiting array per he Push akrta h but concat haamko ek nya array deta h 
//  console.log(marvel_heros); // aisa Output aa rha h [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//   console.log(marvel_heros[3][1]);

//  const allHeros = marvel_heros.concat(dc_heros)//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//  console.log(allHeros);

 //const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

 //const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//const real_another_array = another_array.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//console.log(real_another_array); //infinity se woo saara sub aaray ka depth dekh lega and saab ko combine karlega 



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh")) //hitesh se wo ek naya array bna dega
// console.log(Array.from({name: "hitesh"})) // interesting-> ye important h interview ke leye important h


let score1 = 100
let score2 = 200
let score3 = 300
  //making a array from different no. of keys 
console.log(Array.of(score1, score2, score3)); //yha Array.of() use karte h
