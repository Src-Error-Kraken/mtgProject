const loginRouter = require('express').Router();
const loginController = require('/loginController');
const loginViewController = require('../loginViewController');

const loginDb = require('../models/login');

function sendError(err, req, res, next) {
	console.log('I send dementors');
	res.status(500).json({
		status: 'error',
		message: err.message
	})
}


// these routes are gonna lead to the css and visuals
loginRouter.route('/login')
	// .get(ViewController.showLoginForm, cardsController.getCards, cardsViewController.sendCards)
	// .post(AuthService.loginRequired, ViewController.showLoginForm);
	.get(sendError)
	.post(loginController.create, loginViewController.sendCreateUser)


	// authRouter.get('/logout', AuthService.logout, ViewController.handleCreateUser);

	// // handler of my erroneous errors
	// authRouter.use((err, req, res, next) => {
	// 	console.error(err);
	// 	res.json({ error: err });
	// })
module.exports = loginRouter;