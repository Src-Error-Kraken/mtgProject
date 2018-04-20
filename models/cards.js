
const db = require('../config/connection');

function getAllCards() {
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

function createUser(user) {
	const queryPromise = db.one(`
		INSERT INTO Users (id, name, password_digest, favorited)
		VALUES ($/id/, $/name/, $/password_digest/, $/favorited/)
		RETURNING *
		`,user
	);
	return queryPromise
}

function updateUser(user) {
	const queryPromise = db.one(`
		UPDATE Users
		SET id = $/id/, $/name/, $/password_digest/, $/favorited/
		WHERE Users.id = $/Users_id/
		RETURNING *
		`,user
	);
	return queryPromise
}

function destroyUser(id) {
	const queryPromise = db.one(`
		DELETE FROM Users WHERE Users.id = $1
		`,id
	);
	return queryPromise
}

module.exports = {
	getAllCards,
	getOneCard,
	createUser,
	updateUser,
	destroyUser,
}