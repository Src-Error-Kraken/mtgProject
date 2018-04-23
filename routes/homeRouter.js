const homeRouter = require('express').Router()
const homeController = require('../controllers/homeController');
const homeViewController = require('../controllers/homeViewController');

function sendError(err, req, res, next) {
	console.log('you may not planes walk');
	res.status(500).json({
		status: 'error',
		message: err.message
	})
}

// homeRouter.route('/')
// 	.get(homeController.sendhome);





module.exports = homeRouter;