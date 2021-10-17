var express = require("express");
var router = express.Router();

var Costumer = require("../models/Costumer");
var Plant = require("../models/plant");

//Create costumer
router.post("/", function (req, res, next) {
  var costumer = new Costumer(req.body);
  costumer.save(function (err, costumer) {
    if (err) {
      if (
        err.name === "MongoError" &&
        err.code === 11000 &&
        err.keyPattern.email === 1
      ) {
        return res.status(422).json({ message: "email already exists" });
      } else if (
        err.name === "MongoError" &&
        err.code === 11000 &&
        err.keyPattern.name === 1
      ) {
        return res.status(422).json({ mesage: "user name already exists" });
      }
      return next(err); //return status codes
    } else {
      res.status(201).json(costumer);
    }
  });
});

//delete all costumers
router.delete("/", function (req, res, next) {
  Costumer.remove({}, function (err) {
    if (err) {
      return next(err);
    } else res.status(200).json({ message: "Deleted!" });
  });
});

//delete costumer by ID
router.delete("/:id", function (req, res, next) {
  var costumerId = req.params.id;
  Costumer.findByIdAndDelete(costumerId, function (err, costumer) {
    if (err) {
      return next(err);
    } else res.status(200).json({ "Deleted costumer": costumer });
  });
});

//get all costumers
router.get("/", function (req, res, next) {
  Costumer.find(function (err, costumers) {
    if (err) {
      return next(err);
    } else {
      res.status(200).json({ costumers: costumers });
    }
  });
});

//find one costumer by ID
router.get("/:id", function (req, res, next) {
  var costumerId = req.params.id;
  Costumer.findOne({ _id: costumerId }, function (err, costumer) {
    if (err) {
      return next(err);
    }
    if (costumer === null) {
      return res.status(404).json({ message: "costumer not found" });
    } else {
      res.status(200).json(costumer);
    }
  });
});

//change username or password
router.patch("/:id", function (req, res, next) {
  var id = req.params.id;
  Costumer.findById(id, function (err, costumer) {
    if (err) {
      return next(err);
    }
    if (costumer == null) {
      return res.status(404).json({ message: " not found" });
    }
    costumer.name = req.body.name || costumer.name;
    costumer.email = req.body.email || costumer.email;
    costumer.password = req.body.password || costumer.password;
    costumer.streeName = req.body.streeName || costumer.streeName;
    costumer.streeNumber = req.body.streeNumber || costumer.streeNumber;
    costumer.city = req.body.city || costumer.city;
    costumer.save();
    res.status(200).json(costumer);
  });
});

router.put("/:id", function (req, res, next) {
  var id = req.params.id;
  Costumer.findById(id, function (err, costumer) {
    if (err) {
      return next(err);
    }
    if (costumer == null) {
      return res.status(404).json({ message: " not found" });
    }
    costumer.name = req.body.name;
    costumer.email = req.body.email;
    costumer.password = req.body.password;
    costumer.streeName = req.body.streeName;
    costumer.streeNumber = req.body.streeNumber;
    costumer.city = req.body.city;
    costumer.save();
    res.status(200).json(costumer);
  });
});

/* //add plant to costumer
router.post("/gardens/:id", function (req, res, next) {
  Costumer.findOne({ name: req.body.name }, function (err, costumer) {
    if (err) {
      return next(err);
    } else {
      res.status(200).json({ costumer, msg: "post successfull" });
    }
  }).populate("plantsBought");
});
 */
//add plant to costumer
router.post("/:id/plants", function (req, res, next) {
  var id = req.params.costumer_id;
  Costumer.findById(id, function (err, costumer) {
    if (err) {
      return res.status(500).json(err);
    }
    if (costumer == null) {
      return res.status(404).json({ costumer_id: "not found" });
    }
    var plant = new Plant(req.body);
    plant.save(function (error, plant) {
      costumer.plantsBought.push(plant._id);
      console.log(costumer);
      costumer.save();
      res.status(201).json(costumer);
    });
  });
});

module.exports = router;
