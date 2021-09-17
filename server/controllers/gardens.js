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
*/

module.exports = router;
