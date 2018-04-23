const authRouter = require('express').Router();
const AuthService = require('./AuthSerive');
const ViewController = require('../UserViewController');


// these routes are gonna lead to the css and visuals
authRouter.route('/login')
	.get(ViewController.showLoginForm)
	
	.post(AuthService.login, ViewController.handleCreateUser);


	authRouter.get('/logout', AuthService.logout, ViewController.handleCreateUser);

	// handler of my erroneous errors
	authRouter.use((err, req, res, next) => {
		console.error(err);
		res.json({ error: err });
	})
module.exports = authRouter;