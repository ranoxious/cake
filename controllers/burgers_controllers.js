

// Node Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/cake.js');


// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { cake: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});


// Create a New Burger
router.post('/cake/create', function (req, res) {
  burger.insertOne(req.body.cake_name, function() {
    res.redirect('/index');
  });
});


// Devour a Burger
router.post('/cake/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = router;