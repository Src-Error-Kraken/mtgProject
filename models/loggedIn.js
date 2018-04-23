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