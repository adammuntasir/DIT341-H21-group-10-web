var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gardenSchema = new Schema({
    name: { type: String},
    size: { type: Number},
    cordintelongitude: { type: Number},
    cordintelatitude: {type: Number}
});
module.exports = mongoose.model('gardens', gardenSchema);