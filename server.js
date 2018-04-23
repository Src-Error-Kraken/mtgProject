const path = require('path');
const express = require('express');
const logger = require('morgan');
const methodOverRide = require('method-override');

const cardsRouter = require('./routes/cardsRouter');
// const nav = require('./views/template/nav');
// const home = require('./views/home');


const PORT = 3000;


const app = express();


app.use(logger('dev'));
app.use(methodOverRide('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
	res.render('views/home.ejs'
	);
})


app.use('/cards', cardsRouter);
// app.use('/nav', nav)
// app.use('/home', home)



app.listen(PORT, () => {
	console.log(`${PORT} strong and still alive`);
});