var express = require("express");
const { Schema } = require("mongoose");
var router = express.Router();

var Garden = require("../models/garden");

// (a) POST /gardens

router.post("/api/gardens", function (req, res, next) {
  var garden = new Garden(req.body);
  garden.save(function (err, garden) {
    if (err) {
      return next(err);
    }
    res.status(201).json(garden);
  });
});

// (b) GET /gardens
router.get("/api/gardens", function (req, res, next) {
  Garden.find(function (err, gardens) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ gardens: gardens });
  });
});

// (c) DELETE /gardens
router.delete("/api/gardens/", function (req, res, next) {
  Garden.remove({}, function (err) {
    if (err) {
      return next(err);
    } else res.status(200).json({ message: "Deleted!" });
  });
});

//(d) GET /gaderns/:id
router.get("/api/gardens/:id", function (req, res, next) {
  var id = req.params.id;
  Garden.findById(req.params.id, function (err, garden) {
    if (err) {
      return next(err);
    }
    if (garden == null) {
      return res.status(404).json({ message: "Garden not found" });
    }
    res.status(200).json(garden);
  });
});

//(e) PUT /gardens/:id

router.put("/api/gardens/:id", function (req, res, next) {
  var id = req.params.id;
  Garden.findById(id, function (err, garden) {
    if (err) {
      return next(err);
    }
    if (garden == null) {
      return res.status(404).json({ message: "Garden not found" });
    }
    garden.name = req.body.name;
    garden.size = req.body.size;
    garden.cordintelatitude = req.body.cordintelatitude;
    garden.cordintelongitude = req.body.cordintelongitude;
    garden.save();
    res.status(200).json(garden);
  });
});

// (f) PATCH /gardens/:id

router.patch("/api/gardens/:id", function (req, res, next) {
  var id = req.params.id;
  Garden.findById(id, function (err, garden) {
    if (err) {
      return next(err);
    }
    if (garden == null) {
      return res.status(404).json({ message: "Garden not found" });
    }
    garden.name = req.body.name || garden.name;
    garden.size = req.body.size || garden.size;
    garden.cordintelatitude =
      req.body.cordintelatitude || garden.cordintelatitude;
    garden.cordintelongitude =
      req.body.cordintelongitude || garden.cordintelongitude;
    garden.save();
    res.status(200).json(garden);
  });
});

//(g) DELETE /gardens/:id

router.delete("/api/gardens/:id", function (req, res, next) {
  var id = req.params.id;
  Garden.findOneAndDelete({ _id: id }, function (err, garden) {
    if (err) {
      return next(err);
    }
    if (garden == null) {
      return res.status(404).json({ message: "Garden not found" });
    }
    res.status(200).json(garden);
  });
});




/*
//  POST /gardens/:garden_id/plants

// for example:
// plants in a garden(_id 1) contains these plants: [A, B]

//router.post("/api/gardens/:garden_id/plants", function (req, res, next) {^
// check if garden with id garden_id exists by using Garden.findById({garden_id})
//      if yes, create a new plant
//          create a new plant by calling new Plant(req.body)
//          add the newly created plant to the plants list of the garden so that it becomems plants: [A, B, newPlant]
//          save the plant to the database by calling .save()
//          save the garden by calling garden.save()
//          update the 'has' list in garden 
//      if no, send item garden with id garden_id not found

var garden = new Garden(req.body);
  garden.save({ id })
    .populate("has")
    .exec(function (err, garden) {
      if (err) {
        return next(err);
      }
      res.status(200).json({ gardens: gardens });
    });
});


//  GET /gardens/:garden_id/plants

//router.get("/api/gardens/garden_id/plants", function (req, res, next) {
  Garden.findOne({ id })
    .populate("has")
    .exec(function (err, garden) {
      if (err) {
        return next(err);
      }
      res.status(200).json({ gardens: gardens });
    });
});

// GET /gardens/:garden_id/plants/:plant_id
//router.get("/api/gardens/:garden_id/plants/:plant_id", function (req, res, next) {
  Garden.findOne({ id })
    .populate("has")
    .exec(function (err, garden) {
      if (err) {
        return next(err);
      }
      res.status(200).json({ gardens: gardens });
    });
});

// DELETE /gardens/:garden_id/plants/:plant_id
//router.delete("/api/gardens/:garden_id/plants/:plant_id", function (req, res, next) {
  Garden.findOneAndDelete({ id })
    .populate("has")
    .exec(function (err, garden) {
      if (err) {
        return next(err);
      }
      res.status(200).json({ gardens: gardens });
    });
});


*/


module.exports = router;
