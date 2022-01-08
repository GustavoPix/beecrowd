var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var consumo = 12;
var tempo = parseInt(lines[0]);
var velocidade = parseInt(lines[1]);

var result = velocidade * tempo / consumo;

console.log(`${result.toFixed(3)}`);
