const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]  //spread 
console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7],[4,5]]
const real_another_array = another_array.flat(2)  //flat method
// console.log(real_another_array);

console.log(Array.isArray("Anupam")); //false
console.log(Array.from("Anupam")); //['A', 'n', 'u', 'p', 'a', 'm' ]
console.log(Array.from({name:"Anupam"}));  //[]

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));  //[100,200,300]



