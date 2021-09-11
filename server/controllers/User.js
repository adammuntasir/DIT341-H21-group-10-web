var express = require('express');
var router = express.Router();

var User = require('../models/User');


//Create user
router.post('/', function (req, res, next) {

    var user = new User(req.body);
    user.save(function (err, user) {
        if (err) {
            if (err.name === "MongoError" && err.code === 11000 && err.keyPattern.email === 1) {
                return res.status(422).json({ "message": "email already exists" });
            } else if (err.name === "MongoError" && err.code === 11000 && err.keyPattern.name === 1) {
                return res.status(422).json({ "mesage": "user name already exists" });
            }
            return next(err);
        }
        else { res.status(201).json(user); }
    });
});

//delete all users
router.delete('/', function (req, res, next) {
    User.remove({}, function (err) {
        if (err) {
            return next(err);
        } else res.json({ "message": 'Deleted!' })
    })
})


//get all users
router.get('/', function (req, res, next) {
    User.find(function (err, users) {
        if (err) {
            return next(err);
        }
        else {
            res.json({ 'users': users });
        }
    })
})

//find one user by ID
router.get('/:id', function (req, res, next) {
    var userId = req.params.id;
    User.findOne({ '_id': userId }, function (err, user) {
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({ 'message': 'user not found' });
        }
        res.json(user);
    });
});

//change username or password
router.patch('/:id', function (req, res, next) {
    User.findOneAndUpdate(
        { '_id': req.params.id },
        { 'name': req.body.name, 'password': req.body.password }, function (err, user) {
            if (err) {
                // if (err.name === 'MongoError' && err.code === 11000) {
                //     return res.status(422).json({ 'message': 'Username already exists' });
                // }
                return res.status(500).json({ err: err });
            }
            else {
                res.status(200).json({ user, 'msg': 'update successfull :)' });
            }
        });
});




module.exports = router;