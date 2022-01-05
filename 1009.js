var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines[1]);
var comissao = parseFloat(lines[2]) * 0.15;
var total = parseFloat(salario + comissao).toFixed(2);

console.log(`TOTAL = R$ ${total}`);
