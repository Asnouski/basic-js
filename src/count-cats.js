const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cat) {
	let sum = 0;
	for (let i = 0; i < cat.length; i++) {
		cat[i].forEach(element => { if (element === '^^') sum++ });
	}
	return sum
};
