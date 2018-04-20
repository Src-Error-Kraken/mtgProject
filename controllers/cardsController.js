const = require('../models/cards');


function getAll(req, res, next) {
	console.log('you can query all db')
	cardsDb.getAllcards()
	.then(data => {
		console.log('look at these' + data.length);
		res.locals.cards = data;
		next();
	})
	.catch(err => {
		next(err);
	});
}

function getOne(req, res, next) {
	console.log(req.params);
	cardsDb.getOnehouse(req.params.id)
	.then(data => {
		console.log(data);
		res.locals.cards = data;
		next();
	})
	.catch(err => next(err));
}

module.exports = {
	getAll: getAll,
	getOne: getOne,
}