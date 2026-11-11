// const tinderUser =new Object()  //singleton 
const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name ="Anupam"
tinderUser.isLoggedIn =false

// console.log(tinderUser);

const regularUser ={
    email:"someemail@example.com",
    fullname:{
        userFullname:{
            firstname:"Anupam",
            lastname:"Yadav"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3 =Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}  //spread operator
// console.log(obj3);

const users =[
    {
        id:123,
        email:"abc@gmail.com"
    },
     {
        id:123,
        email:"abc@gmail.com"
    },
     {
        id:123,
        email:"abc@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('IsLoggedIn'));





