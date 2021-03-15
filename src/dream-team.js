const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let team = [];
	if (typeof (members) !== 'object' || !members || members.length == 0) return false;
	for (let i = 0; i < members.length; i++) {
		if (typeof (members[i]) == 'string') {
			let name = members[i].toUpperCase().trim();
			team.push(name[0]);
		}
	}
	return team.sort().join('');
};
