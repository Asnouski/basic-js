const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	const k = 0.693 / HALF_LIFE_PERIOD;
	let total = false;
	if (typeof (sampleActivity) === 'string') {
		let numSampleActivity = parseFloat(sampleActivity);
		if (numSampleActivity < MODERN_ACTIVITY && numSampleActivity > 0) {
			const t = Math.log(MODERN_ACTIVITY / numSampleActivity) / k;
			total = Math.ceil(t);
		}
	}
	return total;
};
