var express = require('express');
var router = express.Router();
var UserModel = require('../model/UserModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  var User = new UserModel();
  User.readAll().then(function(data){
    // res.send(JSON.stringify(data));
    res.send(data);
  })
  
  // res.render('index', { title: 'Express' });
});

module.exports = router;
