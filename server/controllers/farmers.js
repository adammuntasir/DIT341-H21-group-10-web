var express = require('express');
var router = express.Router();

var Farmer = require("../models/Farmer");

//post one
router.post('/api/farmers', function (req, res, next) {

    var farmer = new Farmer(req.body);
    farmer.save(function (err, farmer) {
        if (err) {
            if (err.name === "MongoError" && err.code === 11000 && err.keyPattern.email === 1) {
                return res.status(422).json({ "message": "email already exists" });
            } else if (err.name === "MongoError" && err.code === 11000 && err.keyPattern.name === 1) {
                return res.status(422).json({ "mesage": "user name already exists" });
            }
            return next(err); //return status codes
        }
        else { res.status(201).json(farmer); }
    });
});

//get all
router.get('/api/farmers', function (req, res, next) {
    Farmer.find(function (err, farmers) {
        if (err) {
            return next(err);
        }
        else {
            res.status(200).json({ 'farmers': farmers });
        }
    })
})

//delete one
router.delete('/api/farmers/:id', function (req, res, next) {
    var farmerId = req.params.id;
    Farmer.findByIdAndDelete(farmerId, function (err, farmer) {
        if (err) {
            return next(err);
        }
        else res.status(200).json({ 'Deleted farmer': farmer });
    })
})

//delete all
router.delete('/api/farmers', function (req, res, next) {
    Farmer.remove({}, function (err) {
        if (err) {
            return next(err);
        } else res.status(200).json({ "message": 'Deleted!' })
    })
})


//get one
router.get('/api/farmers/:id', function (req, res, next) {
    var farmerId = req.params.id;
    Farmer.findOne({ '_id': farmerId }, function (err, farmer) {
        if (err) { return next(err); }
        if (farmer === null) {
            return res.status(404).json({ 'message': 'farmer not found' });
        }
        else { res.status(200).json(farmer); }
    });
});

router.patch('/api/farmers/:id', function (req, res, next) {
    Farmer.findOneAndUpdate(
        { '_id': req.params.id },
        { 'name': req.body.name, 'password': req.body.password }, function (err, farmer) {
            if (err) {
                // if (err.name === 'MongoError' && err.code === 11000) {
                //     return res.status(422).json({ 'message': 'Username already exists' });
                // }
                return res.status(500).json({ err: err });
            }
            else {
                res.status(200).json({ farmer, 'msg': 'update successfull :)' });
            }
        });
});

module.exports = router;
