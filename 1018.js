var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines[0]);
var n100 = Math.floor(valor / 100);
valor %= 100;
var n50 = Math.floor(valor / 50);
valor %= 50;
var n20 = Math.floor(valor / 20);
valor %= 20;
var n10 = Math.floor(valor / 10);
valor %= 10;
var n5 = Math.floor(valor / 5);
valor %= 5;
var n2 = Math.floor(valor / 2);
valor %= 2;
var n1 = valor;

console.log(lines[0]);
console.log(`${n100} nota(s) de R$ 100,00`);
console.log(`${n50} nota(s) de R$ 50,00`);
console.log(`${n20} nota(s) de R$ 20,00`);
console.log(`${n10} nota(s) de R$ 10,00`);
console.log(`${n5} nota(s) de R$ 5,00`);
console.log(`${n2} nota(s) de R$ 2,00`);
console.log(`${n1} nota(s) de R$ 1,00`);
