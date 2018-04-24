DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS favorites;


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
	password VARCHAR (20)
	);

CREATE TABLE favorites(
	id SERIAL PRIMARY KEY,
	card_id INTEGER REFERENCES cards, 
	user_id INTEGER REFERENCES Users
	);

INSERT INTO cards
(api_id, name, img_url)

VALUES
('56f1ce954141e316edd1ea017ec47b7defa367e5', 'Baffling End','http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439658&type=card'),
('8fc61b9efef5eb2d170b24e676179c7060905209', 'Bishop of Binding','http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439659&type=card'),
('38f261e669270bf98d284fdb22f4f528d8db5d85', 'cleansing Ray','http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439661&type=card'),
('38f261e669270bf98d284fdb22f4f528d8db5d85', 'Blazing Hope', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439660&type=card'),
('d58269682851a50dcc97e8ec4bd054682c3e4d9a', 'Divine Verdict', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439662&type=card'),
('ac75b8855edbfe2310d1b21855e2c5289b9bb51d', 'Everdawn Champion','http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439663&type=card'),
('a197508171ddb459f2e9d8c6378f12f232a242f5', 'Exultant Skymarcher', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439664&type=card'),
('eb7e7d4f242e970750d7cbd638590ca3a61812cc', 'Famished Paladin', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439665&type=card'),
('c301718003d6466bda684ccd917d0ef6ea63b487', 'Forerunner of The Legion', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439666&type=card'),
('7b332dc8d5afd11c2fae3363767cc6e0414f8961', 'Imperial Ceratops', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439667&type=card'),
('f45c794b3fc1e585b56a2f407dbdd39def13c794', 'Legion Conquistador', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439668&type=card'),
('8e8e1d3987df17865e4e0479f872ca1d934347e1', 'Luminous Bonds', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439669&type=card');

INSERT INTO Users
(name, password)

VALUES
('Kraken', 'delakraken'),
('RevKnox', 'delaknox'),
('RedLine', 'delared'),
('Cha', 'delacha');


INSERT INTO favorites
(card_id,user_id)

VALUES
(1,1);






