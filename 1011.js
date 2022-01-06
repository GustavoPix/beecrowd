var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var pi = 3.14159;
var r = (4 / 3) * pi * Math.pow(parseFloat(lines[0]), 3);

console.log(`VOLUME = ${r.toFixed(3)}`);
