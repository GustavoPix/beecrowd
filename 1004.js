var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var prod = lines[0] * lines[1];
console.log(`PROD = ${prod}`);
