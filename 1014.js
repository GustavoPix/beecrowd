var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var result = parseFloat(lines[0]) / parseFloat(lines[1]);

console.log(`${result.toFixed(3)} km/l`);
