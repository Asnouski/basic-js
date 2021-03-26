const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	str = String(str);
	const newoptions = {
		repeatTimes: ('repeatTimes' in options && typeof (options.repeatTimes) == 'number') ? options.repeatTimes : 1,
		separator: 'separator' in options ? options.separator : '+',
		addition: 'addition' in options ? String(options.addition) : '',
		additionRepeatTimes: ('additionRepeatTimes' in options && typeof (options.additionRepeatTimes) == 'number') ? options.additionRepeatTimes : 1,
		additionSeparator: 'additionSeparator' in options ? options.additionSeparator : '|'
	};
	let dop = '';
	if (newoptions.additionRepeatTimes > 0) {
		dop = newoptions.addition;
		for (let i = 1; i < newoptions.additionRepeatTimes; i++) {
			dop += newoptions.additionSeparator + newoptions.addition
		}
	}
	let message = str + dop;
	for (let i = 1; i < newoptions.repeatTimes; i++) {
		message += newoptions.separator + str + dop;
	}
	return message;
};
