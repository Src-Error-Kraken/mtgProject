const path = require('path');
const express = require('express');
const logger = require('morgan');
const methodOverRide = require('method-override');
const sessions = require('express-sessions');
// const mongoose = require('mongoose');

const cardsRouter = require('./routes/cardsRouter');
// const nav = require('./views/template/nav');
// const home = require('./views/home');


const PORT = 3000;


const app = express();
// mongoose.connect();


app.use(logger('dev'));
app.use(methodOverRide('_method'));
// app.use(express.session({
//     secret: 'a4f8071f-c873-4447-8ee2',
//     cookie: { maxAge: 2628000000 },
//     store: new (require('express-sessions'))({
//         storage: 'mongodb',
//         instance: mongoose, // optional
//         host: 'localhost', // optional
//         port: 27017, // optional
//         db: 'magicUsers', // optional
//         collection: 'sessions', // optional
//         expire: 86400 // optional
//     })
// }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
	// req.session.counter=(req.session.counter || 0) +1
	// console.log(req.session.counter);
	// res.send('sessioning');
	res.render('home.ejs'
	);
})

app.get('/cards', function(req, res) {
	res.render('cardView.ejs'
	);
})

app.get('/login', function(req, res) {
	res.render('login.ejs'
	);
})

app.get('/loggedIn', function(req, res) {
	res.render('loggedCardView.ejs'
	);
})


app.use('/cards', cardsRouter);
// app.use('/nav', nav)
// app.use('/home', home)



app.listen(PORT, () => {
	console.log(`${PORT} strong and still alive`);
});