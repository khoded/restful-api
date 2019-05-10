const express  = require('express');
const routes = require('./routes/api');
const parser = require('body-parser');
const mongoose = require('mongoose');


// set up express app
const app = express();


//connect to mongoDB
mongoose.connect('mongodb://localhost/ninja', {useNewUrlParser: true});
//deprecated promise
mongoose.Promise = global.Promise;

//middle ware before route handler 
app.use(parser.json());


//initialize routes
app.use('/api',routes)

//error handler middleware
app.use(function(err, req, res, next) {
	// body...
	//console.log(err);
	res.status(422).send({error: err.message}); 


})


//listening for request
app.listen(process.env.port || 4000,function(){
 console.log('now listening for request');
});


