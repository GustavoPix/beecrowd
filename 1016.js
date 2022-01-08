var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var result = lines[0] * 2;

console.log(`${result} minutos`);
