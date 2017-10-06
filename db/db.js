var mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/test';

mongoose.connect(connectionString);


mongoose.connection.on('error', (error) => {
	console.log(error);
});

mongoose.connection.on('connected', () => {
	console.log('connected');
})

mongoose.connection.on('disconnect', () => {
	console.log('disconnect');
})