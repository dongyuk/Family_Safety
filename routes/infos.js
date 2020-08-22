var express = require('express');
const InfoHandler = require('../handler/InfoHandler');
const InfoModel = require('../model/InfoModel');
const InfoSchema = require('../model/InfoSchema');

var router = express.Router();

const infoHandler = new InfoHandler();

/* GET Infos listing. */
router.get('/', function (req, res, next) {
    infoHandler.readAll();
});

module.exports = router;