
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);

}

 //addTwoNumbers() // isko sirf single execute krane pe NAN aa rha h kyuki number1 and number2 h kya ye to pta he nhi h na  ?

 //addTwoNumbers(2,3)

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //agar yha haam agar result me value dekhe ge to undefined hoga kyuki hamara function kuch return thode na kar rha h wo baas print kar rha h agar kuch return karte to fir result me kuch store jarur ho jata 

//console.log("Result: ", result);


function loginUserMessage(username){
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))


function loginUserMessage(username = "sam"){
    

    // aab haam username ko default value de deye h to aab haam if walee me jayeege he nhi
    if(username === undefined){  //username === undefined  equal to !username ho jata h
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("hitesh"))


// uses of 
function calculateCartPrice(val1, val2, ...num1){//jaaab haamko pta nhi ho ki kitha parameter aayega 
     return num1  // num1 wala array return kardega basically rest operator ke help se haam saare extra item ko haam array me store kra lete h
}

//console.log(calculateCartPrice(200, 400, 500, 2000))
 

//object h user yha pe

const user = {
    username: "Anish",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user)


handleObject({
    username: "sam",
    prices: 399 // yha haam direct object ko pass kardeye h without ki pahale intialize karo phir pass karo 
})

//yha haam ek aise function declare kar rahe jo array lete h as a input parameter and uske 1 index wala chiz return kardeta h

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));