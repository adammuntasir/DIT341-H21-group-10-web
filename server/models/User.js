var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { type: String, unique: true, dropDups: true, required: true },
    name: { type: String, unique: true, dropDups: true, required: true },
    password: { type: String },
    userType: { type: String, required: true },
    cCardNo: { type: Number },
    cCardExpDate: { type: String },
    FirstName: { type: String },
    LastName: { type: String },
    streetNumber: { type: String },
    streetName: { type: String },
    city: { type: String },
    // gardenID: {
    //     type: Schema.types.ObectId,
    //     ref: 'garden'
    // }
});

module.exports = mongoose.model('user', userSchema);