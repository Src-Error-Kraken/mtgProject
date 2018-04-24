const db = require('../config/connection');
const dbConfig = require('../../config/dbConfig');
const db = pgp(dbConfig);

const pgp = require('pg-promise')({
	query: q => console.log(q.query),
});


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
			  password
			)
			Values (
			  $/id/,
			  $/name/,
			  $/password/
			) 
			ON CONFLICT (name) DO UPDATE 
			SET 
			  id 				= $/id/,
			  name 				= $/name/,
			  password 	= $/password/
			RETURNING *
		`, Users);
	},

	update(id) {
		return db.one(`
			UPDATE Users
			SET
			id = $/id/,
			name = $/name/,
			password = $/password/
			RETURNING *
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