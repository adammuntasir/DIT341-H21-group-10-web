var express = require("express");
const { Schema } = require("mongoose");
const garden = require("../models/garden");
var router = express.Router();

var Garden = require("../models/garden");
var Plant = require("../models/plant");
//const plant = require("../models/plant");

// (a) POST /gardens

router.post("/api/gardens", function (req, res, next) {
  var garden = new Garden(req.body);
  garden.save(function (err, garden) {
    if (err) {
      return res.status.json({ message: "Bad request" });
    }
    res.status(201).json(garden);
  });
});

// (b) GET /gardens
router.get("/api/gardens", function (req, res, next) {
  Garden.find(function (err, gardens) {
    if (err) {
      return res.status(500).json(err);
    }
    if (garden == null) {
      return res.status(404).json({ message: "Garden not found" });
    }
    res.status(200).json({ gardens: gardens });
  });
});

// (c) DELETE /gardens
router.delete("/api/gardens/", function (req, res, next) {
  Garden.remove({}, function (err) {
    if (err) {
      return res.status(500).json(err);
    } else res.status(200).json({ message: "Deleted!" });
  });
});

//(d) GET /gaderns/:id
router.get("/api/gardens/:id", function (req, res, next) {
  var id = req.params.id;
  Garden.findById(req.params.id, function (err, garden) {
    if (err) {
      return res.status(500).json(err);
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
      return res.status(500).json(err);
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
      return res.status(500).json(err);
    }
    if (garden == null) {
      return res.status(404).json({ message: "Garden not found" });
    }
    res.status(200).json(garden);
  });
});

//POST /gardens/:garden_id/plants
router.post("/api/gardens/:garden_id/plants", function (req, res, next) {
  var id = req.params.garden_id;
  Garden.findById(id, function (err, garden) {
    if (err) {
      return next(err);
    }
    if (garden == null) {
      return res.status(404).json({ garden_id: "Garden not found" });
    }
    var plant = new Plant(req.body);
    plant.save(function (error, plant) {
      garden.has.push(plant._id);
      garden.save();
      res.status(201).json(garden);
    });
  });
});

//  GET /gardens/:garden_id/plants
router.get("/api/gardens/:garden_id/plants", function (req, res, next) {
  var id = req.params.garden_id;
  Garden.findById(id)
    .populate({ path: "has", model: Plant })
    .exec(function (err, garden) {
      if (err) {
        return next(err);
      }
      if (garden == null) {
        return res.status(404).json({ garden_id: "Garden not found" });
      }

      res.status(200).json(garden);
    });
});

//  GET /gardens/:garden_id/plants/:plant_id
router.get(
  "/api/gardens/:garden_id/plants/:plant_id",
  function (req, res, next) {
    var garden_id = req.params.garden_id;
    Garden.findById(garden_id, function (err, garden) {
      if (err) {
        return next(err);
      }
      if (garden == null) {
        return res.status(404).json({ garden_id: "Garden not found" });
      }
      var plant_id = req.params.plant_id;
      Plant.findById(plant_id, function (err, plant) {
        if (err) {
          return next(err);
        }
        if (plant == null) {
          return res.status(404).json({ message: "Plant not found" });
        }
        // check if plant with garden_id was found or not
        // if not send 404
        // if yes, now find the plant with given plant_id
        // if the plant was not found send 404
        garden.has.includes(plant_id);
        res.status(200).json(plant);
      });
    });
  }
);

module.exports = router;
