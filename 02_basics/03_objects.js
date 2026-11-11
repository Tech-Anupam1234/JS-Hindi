// singleton
// Object.create

//object literals

const mySym =Symbol("key1") //defining the symbol

//define in key-value pairs
const JsUser ={
    name :"Anupam",
    "fullname":"Anupam Yadav",
    [mySym] :"myKey1",
    age :18,
    location:"Chandigarh",
    email:"anupamy8881@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);  //Access

// console.log(JsUser["fullname"]);
// console.log(JsUser.fullname); //accessing objects value
// console.log(JsUser[mySym]);  //Accessing the symbol
// console.log(typeof mySym);

JsUser.email ="anupamyadav@google.com"
// Object.freeze(JsUser)

JsUser.email ="anupamyadav@microsoft.com"
// console.log(JsUser);

JsUser.greeting =function(){
    console.log("Hello JS User");
    
}
JsUser.greeting2 =function(){
    console.log(`Hello JS User,${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());









