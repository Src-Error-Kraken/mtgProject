function sendCards(req, res) {
	res.render('partials/index', {
		cards: res.locals.cards
	});
}

function sendOneCard (req, res) {
	res.render('cards/show', {
		card: res.locals.card
	});
}

function sendCreateUser(req, res, next) {
	user: res.locals.newUser
	res.redirect(`Users/%{User.id}`);
}

module.exports = {
	sendCards,
	sendOneCard,
	sendCreateUser
}