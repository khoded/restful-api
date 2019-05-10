const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja')

//read
router.get('/ninjas', function (req, res, next) {
	// body...
	// Ninja.find({})
	// 	 .then(function(ninja) {
	// 	 	// body...
	// 	 	res.send(ninja)
	// 	 }).catch(next)
	//res.send({type:"GET"})
	Ninja.geoNear(
        {type: "Point", coord: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});


//create
router.post('/ninjas', function (req, res, next) {
	// body...
	//console.log(req.body);
//create an instance of Ninja --1
// const ninja = New Ninja(req.body);
// 	  ninja.save();
//or use mongoose methode .create:  new instance and save in the db
Ninja.create(req.body)
	 .then(function(ninja){
	 res.send(ninja);
	 //console.log(ninja.name);
	 }).catch(next);
	// res.send({
	// 	type:"POST",
	// 	name: req.body.name
	// })
})

//update
router.put('/ninjas/:id', function (req, res, next) {
	// body...
	Ninja.findOneAndUpdate({_id: req.params.id},req.body).then(function() {
	     	// body...
	     	//res.send(ninja);
	Ninja.findOne({_id: req.params.id})
		 .then(function(ninja) {
		 	// body...
		 	res.send(ninja)
			 })
	     });
	//res.send({type:"PUT"})
})

//delete
router.delete('/ninjas/:id', function (req, res, next) {
	// body...
	//console.log(req.params.id);
	Ninja.findOneAndDelete({_id: req.params.id})
	     .then(function(ninja) {
	     	// body...
	     	res.send(ninja);
	     });
	//res.send({type:"DELETE"})
})

module.exports = router;