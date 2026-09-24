const accountId = 144554;
let accountEmail ="anupamy121@gmail.com"
var accountPassword ="12345"
accountCity = "Ambala"

// accountId =2  //not allowed

accountEmail="abcd@gmail.com"
accountPassword="223344"
accountCity="Haryana"
let accountState;

console.log(accountId)

/* Prefer not to use var
because of issue in block scope and functional scope
*/ 
console.table([accountId ,accountEmail,accountPassword,accountCity,accountState])