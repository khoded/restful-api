const express  = require('express');
const routes = require('./routes/api');
const parser = require('body-parser')
// set up express app
const app = express();

//middle ware before route handler 
app.use(parser.json());
//initialize routes
app.use('/api',routes)
//listening for request
app.listen(process.env.port || 4000,function(){
 console.log('now listening for request');
});


