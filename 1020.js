var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var dias = parseInt(lines[0]);
var anos = Math.floor(dias / 365);
dias %= 365;
var mes = Math.floor(dias / 30);
dias %= 30;

console.log(`${anos} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dias} dia(s)`);
