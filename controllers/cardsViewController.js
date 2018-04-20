
const db = require('../config/connection');

function getAllCards(c[]) {
	const queryPromise = db.any(`
		SELECT * FROM cards`
		);
	return queryPromise;
}

function getOneCard(id) {
	const queryPromise = db.one(`
		SELECT * FROM cards
		WHERE card_id = $1
		`,id
		);
	return queryPromise;
}

function createUser(req, res, next) {
	console.log(req,body);
	users
}
module.exports = {
	getAllCards,
	getOneCard,
}