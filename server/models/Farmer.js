var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var farmerSchema = new Schema({
  email: { type: String, unique: true, dropDups: true, required: true },
  name: { type: String, unique: true, dropDups: true, required: true },
  password: { type: String },
  cCardNo: { type: Number },
  cCardExpDate: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  streetNumber: { type: String },
  streetName: { type: String },
  city: { type: String },
  gardensOwned: [
    {
      type: Schema.Types.ObjectId,
      ref: "garden",
    }
  ],
});

module.exports = mongoose.model("farmers", farmerSchema);
