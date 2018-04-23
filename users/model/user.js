const pgp = require('pg-promise')({
	query: q => console.log(q.query),
});

const dbConfig = require('../../config/dbConfig');

const db = pgp(dbConfig);

module.exports = {
	findAll() {
		return db.many(`
		  SELECT *
		  FROM Users
		  ORDER BY id
		  `);
	},

	findOne(name) {
		return db.one(`
		  SELECT *
		  FROM Users
		  WHERE name = $1
		`, name);
	},

	findByid(id) {
		return db.one(`
		  SELECT *
		  FROM Users
		  WHERE name = $1
		`, id);
	},

	save(Users) {
		return db.one(`
			INSERT INTO Users (
			  id,
			  name,
			  password_digest
			)
			Values (
			  $/id/,
			  $/name/,
			  $/password_digest/
			) 
			ON CONFLICT (name) DO UPDATE 
			SET 
			  id 				= $/id/,
			  name 				= $/name/,
			  password_digest 	= $/password_digest/
			RETURNING *
		`, Users);
	},

	update(id) {
		return db.one(`
			UPDATE Users
			SET
			id = $/id/,
			name = $/name/,
			password_digest
		` id);
	},

	destroy(id) {
		return db.none(`
			DELETE
			FROM Users
			WHERE id = $1
		`, id);
	},
};