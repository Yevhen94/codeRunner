const { response } = require('express');
const { request } = require('http');

const	
	express = require('express'),
	app     = express(),
	cors    = require('cors'),
	path    = require('path'),
	port    = process.env.PORT || 3000;


// Config
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'public/index.html'));
})

	
app.listen(port, () => {
	console.log('!!!!!!!!!!!!!!');
})