var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var costumerSchema = new Schema({
    email: { type: String, unique: true, dropDups: true, required: true },
    name: { type: String, unique: true, dropDups: true, required: true },
    password: { type: String },
    credCardNo: { type: Number },
    credCardExpDate: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    streetNumber: { type: String },
    streetName: { type: String },
    city: { type: String },
    plantsBought: [{
        type: Schema.Types.ObjectId,
        ref: "plant"
    }]
})

module.exports = mongoose.model('farmer', costumerSchema);