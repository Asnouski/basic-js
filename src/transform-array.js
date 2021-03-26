const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let newArr = [];
	if (typeof (arr) != 'object') throw new CustomError('Not implemented');
	if (typeof (arr[0]) == 'object') return newArr
	let r, next;
	if (typeof (arr[0]) == 'string' || typeof (arr[arr.length - 1]) == 'string') {
		newArr = arr.filter(elem => { return typeof (elem) != 'string' })
		return newArr
	}
	if (typeof (arr[0]) != 'string' || typeof (arr[arr.length - 1]) != 'string') {
		console.log(1)
		for (let i = 0; i < arr.length; i++) {
			newArr[i] = arr[i]
			if (arr[i] == '--double-next') newArr[i] = arr[i + 1];
			if (arr[i] == '--double-prev') newArr[i] = arr[i - 1];
			if (arr[i] == '--discard-next') {
				next = 1
				r = i;
			}
			if (arr[i] == '--discard-prev') {
				next = -1
				r = i;
			}
		}
		if (next === 1) newArr.splice(r, 2);
		if (next === -1) newArr.splice(r - 1, 2);
	}
	return newArr
};
