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

router.get('/api/plants', function (req, res, next) {
    Plant.find(function (err, plants) {
        if (err) {
            return next(err);
        }
        res.json({ 'plants': plants });

    });

});

//Persist GET /plants/:id
router.get('/api/plants/:id', function (req, res, next) {
    var id = req.params.id;
    Plant.findById(req.params.id, function (err, plant) {
        if (err) {
            return next(err);
        }
        if (plant == null) {
            return res.status(404).json(
                { "message": "plant not found" });
        }
        res.json(plant);
    });
});

// Persist PUT /plants/:id
router.put('/api/plants/:id', function (req, res, next) {
    var id = req.params.id;
    Plant.findById(id, function (err, plant) {
        if (err) {
            return next(err);
        }
        if (plant == null) {
            return res.status(404).json(
                { "message": "Plant not found" });
        }
        plant.name = req.body.name;
        plant.type = req.body.type;
        plant.color = req.body.color;
        plant.season = req.body.season;
        plant.price = req.body.price;
        plant.save();
        res.json(plant);
    });
});

//Persist DELETE /plants/:id
router.delete('/api/plants/:id', function (req, res, next) {
    var id = req.params.id;
    Plant.findOneAndDelete({ _id: id }, function (err, plant) {
        if (err) {
            return next(err);
        }
        if (plant == null) {
            return res.status(404).json(
                { "message": "Plant not found" });
        }
        res.json(plant);
    });
});

//Persist PATCH /plants/:id
router.patch('/api/plants/:id', function (req, res, next) {
    var id = req.params.id;
    Plant.findById(id, function (err, plant) {
        if (err) {
            return next(err);
        }
        if (plant == null) {
            return res.status(404).json(
                { "message": "Plant not found" });
        }
        plant.name = (req.body.name || plant.name);
        plant.type = (req.body.type || plant.type);
        plant.color = (req.body.color || plant.color);
        plant.season = (req.body.season || plant.season);
        plant.price = (req.body.price || plant.price);
        plant.save();
        res.json(plant);
    });
});

module.exports = router;