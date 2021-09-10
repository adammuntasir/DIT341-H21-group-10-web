var express = require('express');
var router = express.Router();

var User = require('../models/User');


//Create user
router.post('/', function (req, res, next) {

    var user = new User(req.body);
    user.save(function (err, user) {
        if (err) {
            if (err.email === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ 'message': 'Username already exists' });
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



module.exports = router;