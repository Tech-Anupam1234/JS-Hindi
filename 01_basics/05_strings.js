//It is a set of "elements" of 16-bit unsigned integer values (UTF-16 code units). 
// Each element in the String occupies a position in the String. 
// The first element is at index 0, the next at index 1, and so on. 
// The length of a String is the number of elements in it. 
// You can create strings using string literals or string objects.

//+++++++++++++++++++++++++++++++++++++++++++++++++

// const name="Anupam"
// const repoCount =50

// console.log(name + repoCount + "Value");

//String interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('hitesh-hc-chaudhary')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('p'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString =gameName.slice(-8,4)
// console.log(anotherString);

// const newStringOne ="   hitesh   "
// console.log(newStringOne);

//trim()
// console.log(newStringOne.trim());

const url ="https://anupam.com/anupam%21yadav"

//replace()
console.log(url.replace('%21','-'));

//includes()
console.log(url.includes('anupam'));

//split()
console.log(gameName.split('-'));
console.log(url.split('/'));








