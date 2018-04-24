const db = require('../config/connection');

function createUser(user) {
	const queryPromise = db.one(`
		INSERT INTO Users (id, name, password_digest, favorited)
		VALUES ($/id/, $/name/, $/password_digest/, $/favorited/)
		RETURNING *
		`,user
	);
	return queryPromise
}
