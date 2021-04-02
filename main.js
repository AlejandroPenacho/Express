const express = require('express');

var App = express();

App.use('/hah', (req, res) =>{
	console.log("Entrada en hah")
})

App.use('/', (req, res, next) => {
	console.log("Entrada en /");
	next();
})

App.use('/',(req,res) => {
	console.log("This is it");
	res.end("Gracias por participar")
})

App.listen(8000)

