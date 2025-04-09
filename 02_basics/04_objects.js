//iss file me haam dekhe ge ke object ko Singleton kaise karte ya phir constructor ke help se kaise kar skte h h ye yha per haam dekhte h 
 
//const tinderUser = new Object() //yha pe haam object and yha wala object non singleton object h 
const tinderUser = {} //ye bhi object h yha wala object singlekton h

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
 
//yha haam object ke andar object declare kar rahe h basically  -> Nested object bnadeye h
const regularUser = {
    email: "some@gmail.com",
    fullname: { //yha Fullname haam object regularUser ke andar Declare kiye h       
        userfullname: {  //yha phir se ek Object declare kiye h
            firstname: "Anish",
            lastname: "Shrivastava"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//jaise haam array ko combine karte the wasie he yha pe haam kuch combination of object dekhte h

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 } //yha combine nhi hoga bolega ke obj3 me obj1 h and obj 2 to yha combine to nhi he hoga... array wala he problem aa jayega phir se yha pe bhi

//const obj3 = Object.assign({}, obj1, obj2, obj4) //Object.assign() ye target object return akrta h to haam ko usko store krana hoga
//{} wala yha pe Syntax me present hota he h to Object.assign ko MDN se jaa ke padhlo ache se yha basically empty object target object h ussme he saara source wala object aa ke combine hoga

// lekion Object clonning ke liye haam ye wala he use karege maximum..

 const obj3 = {...obj1, ...obj2} 
//console.log(obj3);

//ye niche wala object tab banata h jaab object data base se aayega to to array of object banta h
//array of Object aaata h jaab Object DataBase se aata h taab 

const users = [
     {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

 //console.log(users[1].email);
 //console.log(tinderUser);

//console.log(Object.keys(tinderUser)); //ek output mile gaa saare key ka ek array me 
//console.log(Object.values(tinderUser)); //ek Array me Output mile ga joo ki pura value wala chiz rakaha hoga

//console.log(Object.entries(tinderUser)); //kabhi kaam use aata h

//console.log(tinderUser.hasOwnProperty('isLoggedIn')); //ye syntax se haam puch sakte h object ki tumare pass ye proprty h ki nhi ?
//ye sahii chiz h pahale he pta karlo agar property h tabhi haam kaam karege 


//De-structuring of Objects in Detail 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

//yha pe haam courseInstructor ka De-Structuring kar deye h to instructor me
const {courseInstructor: instructor} = course // Object ka Proprty ko fetch karne ka tarika h yha Syntax h
const {price} = course

//IMPORTANT -> REACT me haam Jaab bhi Curl brace dekhe ge to samaj jayege ke DeStructuring kiya jaa rha h

//upper wala dono same chiz h baas 1 wale me haam property ka naam change kar ke instructor kardeye h takki print kran e me kaam likhna pare
// console.log(courseInstructor);

//console.log(instructor);
//console.log(price);

// JSON -API ke baare me dekhte h->Basically niche jo h Wo JSON ka Synatax h Jo API call karene ke baad aata h

//yha niche API Object ke Format me milta h But kabhi kabhi Object ke Format me bhi Milta h
//    {
//     "name": "hitesh",
//     "coursename": "js in hindi",    //Synatax Perfect h
//     "price": "free"
//    }   

//yha pe API hamara Array Ke form me Mila h

// [
//     {},
//     {},
//     {}
// ]
