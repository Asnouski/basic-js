const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (typeof (arr) != 'object') throw new CustomError('Not implemented');
	let newArr = [];
	let r, next;
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
	return newArr
};
