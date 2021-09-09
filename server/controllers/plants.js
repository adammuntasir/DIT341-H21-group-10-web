var express = require('express');
const { Schema } = require('mongoose');
var router = express.Router();

var Plant = require('../models/plant');

router.post('/api/plants', function (req, res, next) {
    var plant = new Plant(req.body);
    plant.save(function (err, plant) {
        if (err) {
            return next(err);
        }
        else res.status(201).json(plant);

    });

});

module.exports = router;