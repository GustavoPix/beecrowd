var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var nA = lines[0] * 3.5 / 10;
var nB = lines[1] * 7.5 / 10;
var n = (nA + nB) * 10 / 11;

console.log(`MEDIA = ${n.toFixed(5)}`);
