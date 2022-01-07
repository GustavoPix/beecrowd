var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var dados = lines[0].split(' ');

var a = parseInt(dados[0]);
var b = parseInt(dados[1]);
var c = parseInt(dados[2]);

var maior = a > b ? (a > c ? a : c) : (b > c ? b : c);

console.log(`${maior} eh o maior`);
