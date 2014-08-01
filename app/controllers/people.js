'use strict';

// grab data from DB 
var Person = require('../models/person');

// injects data into the view
exports.index = function(req, res){
  Person.all(function(err, people){

    console.log(people); // this is an array of objects

  res.render('people/index', {people:people});
  });
};


