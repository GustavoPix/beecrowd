var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

function getProduct(line) {
	let aux = line.split(' ');

	if (aux.length > 2) {
		return {
			id: aux[0],
			qty: parseInt(aux[1]),
			value: parseFloat(aux[2])
		};
	}
	return {
		id: '',
		qty: 0,
		value: 0
	};
}

var products = [];
var total = 0;

lines.forEach(l => products.push(getProduct(l)));
products.forEach(p => total += p.value * p.qty);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
