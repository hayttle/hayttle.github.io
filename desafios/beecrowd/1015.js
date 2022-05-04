

let input = `1.0 7.0\n5.0 9.0`;
let lines = input.split("\n");

let line1 = lines.shift().split(" ");
let x1 = parseFloat(line1[0]);
let y1 = parseFloat(line1[1]);

let line2 = lines.shift().split(" ");
let x2 = parseFloat(line2[0]);
let y2 = parseFloat(line2[1]);

console.log(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(4));
