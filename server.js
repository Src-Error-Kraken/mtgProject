const path = require('path');
const express = require('express');
const logger = require('morgan');
const methodOverRide = require('method-override');




const PORT = 3000;


const app = express();


app.use(logger('dev'));


app.get('/', (req,res) => {
	res.send('welcome Planeswalker');
});



app.listen(PORT, () => {
	console.log(`${PORT} strong and alive`);
});