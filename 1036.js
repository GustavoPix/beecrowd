var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ');

var a = parseFloat(valores[0]);
var b = parseFloat(valores[1]);
var c = parseFloat(valores[2]);

var delta = Math.pow(b, 2) - 4 * a * c;

if (delta < 0 || a === 0) {
	console.log("Impossivel calcular");
}
else {
	var x1 = (-b + Math.sqrt(delta)) / (2 * a);
	var x2 = (-b - Math.sqrt(delta)) / (2 * a);

	console.log(`R1 = ${x1.toFixed(5)}`);
	console.log(`R2 = ${x2.toFixed(5)}`);
}
