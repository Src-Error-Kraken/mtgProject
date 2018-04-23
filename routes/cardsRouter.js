const cardsRouter = require('express').Router()
const cardsController = require('../controllers/cardsController');
const cardsViewController = require('../controllers/cardsViewController');

const cardsDb = require('../models/cards');

function sendError(err, req, res, next) {
	console.log('you may not planes walk');
	res.status(500).json({
		status: 'error',
		message: err.message
	})
}

cardsRouter.route('/')
	.get(cardsController.getOne, cardsViewController.sendOneCard, sendError);

cardsRouter.route('/cards')
	.get(cardsController.getAll, cardsViewController.sendCards, sendError);

cardsRouter.route('cards/:id')
	.get(cardsController.getOne, cardsViewController.sendOneCard, sendError);


module.exports = cardsRouter;