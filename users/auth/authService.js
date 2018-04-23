const bcrypt = require('bcrypt');
const fetch = require('node-fetch');

const User = require('../model/user');

module.exports = {

	async login(req, res, next) {

		try {
			const { username, password } = req.body;

			const user = await User.findOne(username);

			const isValidPass = await bcrypt.compare(password, Users.password_digest);

			if (!isValidPass) {
				throw { message: 'your casting the wrong spell'};
			}

			req.session.user = user;
			next();
		}	catch (err) {
			next (err);
		}
		
	},
// this is how we're going to log out of handle
	logout(req, res, next) {
		req.session.destroy(err => next(err));
	},

	loginRequired: [
// this is going to either pass through next false or next null
	(req, res, next) => next(!req.session.user || null),
	(err, req, res, next) => res.sendStatus(401),

	],
};