var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var dados = lines[0].split(' ');

var a = parseFloat(dados[0]);
var b = parseFloat(dados[1]);
var c = parseFloat(dados[2]);
var pi = 3.14159;

var triangulo = a * c / 2;
var circulo = pi * Math.pow(c, 2);
var trapezio = (a + b) * c / 2;
var quadrado = b * b;
var retangulo = a * b;
console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);
