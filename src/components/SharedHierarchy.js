const Sharedhierarchy = require("../models/SharedHierarchy")

var SharedHierarchy = function (token) {
	this.token = token;
}

SharedHierarchy.prototype.get_shared_hierarchy = function (team_id) {
	token = this.token;
	return new Promise(async function (resolve, reject) {
		try {
			var res = await Sharedhierarchy.get_shared_hierarchy(team_id, token);
			resolve(res);
		} catch (err) {
			reject(err);
		}
	});
}


module.exports = SharedHierarchy;