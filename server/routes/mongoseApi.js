var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var School = require('../models/school.js');

/* GET ALL SchoolS */
router.get('/getSchools', function(req, res, next) {
  School.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE School BY ID */
router.get('/getDetails:id', function(req, res, next) {  
  School.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE School */
router.post('/addSchool', function(req, res, next) {  
  School.create(req.body, function (err, post) {
    console.log(req.body)
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE School */
router.put('/updateSchool:id', function(req, res, next) {
  School.findByIdAndUpdate(req.params.id, req.body, function (err, post) {    
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE School */
router.delete('/deleteSchool:id', function(req, res, next) {
  School.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;