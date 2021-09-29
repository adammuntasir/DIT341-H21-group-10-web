var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var gardenSchema = new Schema({
  name: { type: String },
  size: { type: Number },
  location: { type: String },

  //Relation between garden and the user
  // manageBy: [{ type: Schema.Types.ObjectId, ref: "User" }],

  //Relation between garden and plant
  has: [{ type: Schema.Types.ObjectId, ref: "plant" }],
});
module.exports = mongoose.model("gardens", gardenSchema);
