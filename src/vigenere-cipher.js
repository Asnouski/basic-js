const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	checkError(message, key) {
		if (!message || !key) {
			throw new Error('Ошибка');
		}
	}
}

module.exports = VigenereCipheringMachine;
