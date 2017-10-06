var express = require('express');
var router = express.Router();

var ScoreModel = require('../models/highScore');

// every route in the controller starts with /user

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){

	// information will be availiable to you in req.body

	// use the scoreModel to save to mongo


	res.send('item was saved')
})

module.exports = router;
