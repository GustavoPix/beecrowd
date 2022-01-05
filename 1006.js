var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var nA = lines[0] * 2 / 10;
var nB = lines[1] * 3 / 10;
var nC = lines[2] * 5 / 10;
var n = (nA + nB + nC);

console.log(`MEDIA = ${n.toFixed(1)}`);
