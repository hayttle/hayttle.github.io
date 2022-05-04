//Crie um programa que leia uma matriz 10 x 10 e escreva a localização (linha e a coluna) do maior valor.
/* let array = [
  [2, 8, 12, 5, 9, 7],
  [10, 15, 6, 1, 7, 9],
  [9, 7, 4, 7, 1, 5],
  [6, 9, 6, 8, 2, 6],
  [4, 2, 4, 7, 3, 5],
  [2, 0, 5, 10, 1, 9],
];
let count = 0;

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    if (array[i][j] > 10) {
      count++;
    }
  }
}
console.log(count); 
*/

//Crie um programa que leia uma matriz 6 x 6, conte e escreva quantos valores maiores que 10 ela possui.
/* let array = [
  [2, 8, 12, 5, 9, 7, 8, 7, 6, 4],
  [18, 15, 6, 1, 7, 9, 9, 5, 1, 7],
  [9, 7, 4, 7, 1, 5, 9, 10, 5, 87],
  [6, 9, 6, 8, 2, 6, 9, 1, 4, 7],
  [4, 2, 4, 7, 3, 5, 8, 6, 1, 4],
  [2, 0, 5, 10, 1, 9, 0, 4, 8, 25],
  [6, 9, 6, 8, 2, 6, 9, 1, 4, 7],
  [9, 7, 4, 7, 1, 5, 9, 10, 5, 88],
  [18, 15, 6, 1, 7, 9, 9, 5, 1, 7],
  [2, 0, 5, 10, 1, 9, 0, 4, 8, 25],
];
let max = 0;
let position = [];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (array[i][j] > max) {
      max = array[i][j];
      position = [i + 1, j + 1];
    }
  }
}
console.log(`Maior valor ${max} na linha ${position[0]} e coluna ${position[1]}`);
 */

/* 
Escreva um programa que leia duas sequências de n e m valores inteiros, onde n ≤ m, 
e imprima quantas vezes a primeira sequência ocorre na segunda. 

Exemplo:
Primeira sequência: 1 0 1 
Segunda sequência: 1 1 0 1 0 1 0 0 1 1 0 1 0 
Resultado: 3
*/

/* let seq1 = "543";
let seq2 = "110543005431010105431101001101543";

let substring = "";
let j = seq1.length;
let count = 0;

for (let i = 0; i < seq2.length; i++) {
  substring = seq2.substring(i, j++);
  if (seq1 === substring) count++;
}
console.log(`Resultado: ${count}`); //Resultado: 4 */

/* 
Escreva um programa que leia uma sequência de números inteiros e os 
salve em uma lista. Em seguida o programa deve ler um outro número inteiro C. 
O programa deve então encontrar dois números de posições distintas da lista cuja 
multiplicação seja C e imprimí-los. Caso não existam tais números, o programa deve 
imprimir uma mensagem correspondente. Exemplo:

Lista = [2, 4, 5, 10, 7]
C = 35
Resultado: 5 e 7

Lista = [2, 4, 5, 10, 7]
C = 25
Resultado: não existem tais números
*/
/* 
let lista = [2, 4, 5, 10, 7, 9, 6, 1, 3];
let c = 15;
let temp;
let hasNumber = false;
for (let i = 0; i < lista.length; i++) {
  lista = [2, 4, 5, 10, 7, 9, 6, 1, 3];
  temp = lista.splice(i, 1)[0];
  for (let j = 0; j < lista.length; j++) {
    if (c === temp * lista[j]) {
      console.log(`Resultado: ${temp} e ${lista[j]}`);
      hasNumber = true;
    }
  }
}
if (!hasNumber) console.log(`Resultado: não existem tais números`);
 */

//(x2-x1)^2 + (y2-y1)^2

/*
let input = `1.0 7.0\n5.0 9.0`;
let lines = input.split("\n");

let line1 = lines.shift().split(" ");
let x1 = parseFloat(line1[0]);
let y1 = parseFloat(line1[1]);

let line2 = lines.shift().split(" ");
let x2 = parseFloat(line2[0]);
let y2 = parseFloat(line2[1]);

console.log(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)).toFixed(4));
*/

/* 
Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
  return arr.reduce((acc,item)=>`${acc}${item}`)
}
console.log(stringConcat([1,2,3])); // "123"
*/

//Turn an array of voter objects into a count of how many people voted
/*
function totalVotes(arr) {
  return arr.reduce((acc, {voted}) => (voted ? acc + 1 : acc), 0);
}

var voters = [
  {name: "Bob", age: 30, voted: true},
  {name: "Jake", age: 32, voted: true},
  {name: "Kate", age: 25, voted: false},
  {name: "Sam", age: 20, voted: false},
  {name: "Phil", age: 21, voted: true},
  {name: "Ed", age: 55, voted: true},
  {name: "Tami", age: 54, voted: true},
  {name: "Mary", age: 31, voted: false},
  {name: "Becky", age: 43, voted: false},
  {name: "Joey", age: 41, voted: true},
  {name: "Jeff", age: 30, voted: true},
  {name: "Zack", age: 19, voted: false},
];
console.log(totalVotes(voters)); // 7
*/

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
/*
function shoppingSpree(arr) {
  return arr.reduce((acc, {price}) => acc + price, 0);
}

var wishlist = [
  {title: "Tesla Model S", price: 90000},
  {title: "4 carat diamond ring", price: 45000},
  {title: "Fancy hacky Sack", price: 5},
  {title: "Gold fidgit spinner", price: 2000},
  {title: "A second Tesla Model S", price: 90000},
];

console.log(shoppingSpree(wishlist)); // 227005
 */

// Given an array of arrays, flatten them into a single array
/*
let array = [];
function flatten(arr) {
  return arr.reduce((acc, item) => acc.concat(item), []);
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
*/

/* 
Given an array of potential voters, return an object representing the results of the vote
Include how many of the potential voters were in the ages 18-25, how many from 26-35,
 how many from 36-55, and how many of each of those age ranges actually voted. 
The resulting object containing this data should have 6 properties. See the example output at the bottom.
*/
/*
var voters = [
  {name: "Bob", age: 30, voted: true},
  {name: "Jake", age: 32, voted: true},
  {name: "Kate", age: 25, voted: false},
  {name: "Sam", age: 20, voted: false},
  {name: "Phil", age: 21, voted: true},
  {name: "Ed", age: 55, voted: true},
  {name: "Tami", age: 54, voted: true},
  {name: "Mary", age: 31, voted: false},
  {name: "Becky", age: 43, voted: false},
  {name: "Joey", age: 41, voted: true},
  {name: "Jeff", age: 30, voted: true},
  {name: "Zack", age: 19, voted: false},
];

function voterResults(arr) {
  return {
    numYoungVotes: arr.reduce((acc, {age}) => {
      if (age < 20) acc++;
      return acc;
    }, 0),
    numYoungPeople: arr.reduce((acc, {age}) => {
      if (age >= 18 && age <= 25) acc++;
      return acc;
    }, 0),
    numMidVotesPeople: arr.reduce((acc, {voted, age}) => {
      if (voted && age >= 26 && age <= 35) acc++;
      return acc;
    }, 0),
    numMidsPeople: arr.reduce((acc, {age}) => {
      if (age >= 26 && age <= 35) acc++;
      return acc;
    }, 0),
    numOldVotesPeople: arr.reduce((acc, {voted, age}) => {
      if (voted && age >= 36 && age <= 55) acc++;
      return acc;
    }, 0),
    numOldsPeople: arr.reduce((acc, {age}) => {
      if (age >= 36 && age <= 55) acc++;
      return acc;
    }, 0),
  };
}

console.log(voterResults(voters)); // Returned value shown below:
*/

/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/
