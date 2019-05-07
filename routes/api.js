const express = require('express');
const router = express.Router();
//read
router.get('/ninjas', function (req, res) {
	// body...
	res.send({type:"GET"})
})


//create
router.post('/ninjas', function (req, res) {
	// body...
	res.send({type:"POST"})
})

//update
router.put('/ninjas/:id', function (req, res) {
	// body...
	res.send({type:"PUT"})
})

//delete
router.delete('/ninjas/:id', function (req, res) {
	// body...
	res.send({type:"DELETE"})
})

module.exports = router;