var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var segundos = parseInt(lines[0]);
var minutos = Math.floor(segundos / 60);
segundos %= 60;
var horas = Math.floor(minutos / 60);
minutos %= 60;

console.log(`${horas}:${minutos}:${segundos}`);
