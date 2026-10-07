//primittive

//7 types :String ,Number ,Boolean,null ,undefined, Symbol,BigInt

// const score =100 
// const scoreValue =100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id =Symbol('123')
const anotherId =Symbol('123')

console.log(id===anotherId);

const bigNumber =3456789909899n

//Reference(Non-primitive)
//Array, Object, Functions

const heros =["Shsktiman", "naagraj","doga"];
let myObj ={
    name :"Anupam",
    age:23,
} 

const myFunction =function(){
    console.log("Hello,World");
    
}
//check the types
// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof myFunction);
// console.log(typeof anotherId);
console.log(typeof id);


