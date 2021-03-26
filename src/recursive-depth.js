const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let total = 1;
		arr.forEach(elem => {
			if (Array.isArray(elem)) total = Math.max(total, 1 + this.calculateDepth(elem))
		});
		return total;
	}
};