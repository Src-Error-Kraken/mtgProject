function sendhome(req, res) {
	res.render('template/home', {
		home: res.locals.home
	});
}

function sendtoCards (req, res) {
	res.render('template/cardView', {
		cards: res.locals.card
	});
}

function sendtoLogin(req, res, next) {
	res.render('template/login', {
		sendtoLogin: res.locals.sendtoLogin
	});
}

module.exports = {
	sendhome,
	sendtoCards,
	sendtoLogin
}