const bcrypt = require('bcrypt');
const fetch = require('node-fetch');
const User = require('../models/login');

function create(req, res, next) {
	console.log(req.body);
	User.save(req.body)
	.then(data => {
		console.log(data);
		res.locals.newUser = data;
		next();
	}).catch(err => next(err));
}


module.exports = {
	create: create,

	async login(req, res, next) {

		try {
			const { name, password } = req.body;

			const user = await User.findOne(name);

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
		res.redirect('/')
	},

	loginRequired: [
// this is going to either pass through next false or next null
	(req, res, next) => next(!req.session.user || null),
	(err, req, res, next) => res.sendStatus(401),

	],
};