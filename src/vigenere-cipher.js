const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	checkError(message, key) {
		if (!message || !key) {
			throw new Error('Ошибка');
		}
	}
	constructor(condition = true) {
		this.condition = condition;
	}
	encrypt(message, key) {
		this.checkError(message, key);

	}

	decrypt(encryptedMessage, key) {
		this.checkError(encryptedMessage, key);

	}
}

module.exports = VigenereCipheringMachine;
