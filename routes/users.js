var express = require('express');
const UserHandler = require('../handler/UserHandler');

var router = express.Router();

const userHandler = new UserHandler();

/* GET users listing. */
router.get('/', function (req, res, next) {
  userHandler.readAll(req, res);
});

module.exports = router;
