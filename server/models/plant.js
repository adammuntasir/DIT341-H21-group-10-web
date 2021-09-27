var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var plantSchema = new Schema({
  name: { type: String },
  type: { type: String },
  color: { type: String },
  season: { type: String },
  price: { type: Number },
});
module.exports = mongoose.model("plants", plantSchema);
