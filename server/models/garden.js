var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gardenSchema = new Schema({
    name: { type: String},
    size: { type: Number},
    cordintelongitude: { type: Number},
    cordintelatitude: {type: Number},

    //Relation between garden and the user
    manageBy: [{type: Schema.Types.ObjectId, ref: 'User'}]

});
module.exports = mongoose.model('gardens', gardenSchema);