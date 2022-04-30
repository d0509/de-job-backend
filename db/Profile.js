const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: String,
    edu:String,
    skill:String,
    exp:String,
    proj:String,
    cert:String,
    sal:Number
});

module.exports = mongoose.model("profile", profileSchema);