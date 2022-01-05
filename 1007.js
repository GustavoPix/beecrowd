var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var dif = lines[0] * lines[1] - lines[2] * lines[3];

console.log(`DIFERENCA = ${dif}`);
