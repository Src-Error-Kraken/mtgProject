DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS Users;


-- created tables for cards and Users
CREATE TABLE cards(
	id SERIAL PRIMARY KEY,
	api_id INTEGER 
	name VARCHAR (255),
	img_url TEXT
	);


CREATE TABLE Users(
	id SERIAL PRIMARY KEY,
	name VARCHAR (255),
	password_digest VARCHAR (20),
	favorited INTEGER, FOREIGN KEY (card_id) REFERENCES cards(id)
	);



INSERT INTO cards
(name, img_url)

VALUES
(,'jace',),
(),
(),
();

INSERT INTO magicUsers
(id, name, password_digest, favorited)

VALUES
(Kraken, 39284934798, 1),
(RevKnox, 54353453, 2),
(RedLine, 4534543,3),
(Cha, 5435345, 5);