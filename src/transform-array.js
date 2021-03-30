const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) throw Error('Ошибка');
	let newArray = [];
	let flag = true;
	arr.forEach(function (item, i) {
		if (item === '--discard-next') {
			flag = false;
		} else if (item === '--discard-prev') {
			newArray.pop();
		} else if (item === '--double-next') {
			if (i < arr.length - 1) {
				newArray.push(arr[i + 1]);
			}
		} else if (item === '--double-prev') {
			if (i > 0) {
				newArray.push(arr[i - 1]);
			}
		} else if (flag) {
			newArray.push(item);
		} else {
			flag = true;
		}
	});
	return newArray;
};
