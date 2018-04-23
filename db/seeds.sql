DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS Users;


-- created tables for cards and Users
CREATE TABLE cards(
	id SERIAL PRIMARY KEY,
	api_id VARCHAR(255), 
	name VARCHAR (255),
	img_url TEXT
	);


CREATE TABLE Users(
	id SERIAL PRIMARY KEY,
	name VARCHAR (255),
	password_digest VARCHAR (20),
	);

CREATE TABLE favorites(
	id SERIAL PRIMARY KEY,
	card_id INTEGER REFERENCES cards, 
	user_id INTEGER REFERENCES Users
	);

INSERT INTO cards
(api_id, name, img_url)

VALUES
(56f1ce954141e316edd1ea017ec47b7defa367e5,'Baffling End','http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439658&type=card')
(8fc61b9efef5eb2d170b24e676179c7060905209,'Bishop of Binding','http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439659&type=card')
(38f261e669270bf98d284fdb22f4f528d8db5d85,'cleansing Ray','http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439661&type=card'),
(38f261e669270bf98d284fdb22f4f528d8db5d85,'Blazing Hope', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439660&type=card');

INSERT INTO Users
(name, password_digest)

VALUES
(Kraken, 39284934798),
(RevKnox, 54353453),
(RedLine, 4534543),
(Cha, 5435345);

INSERT INTO favorites
(id, card_id, user_id)

VALUES
(,,)





