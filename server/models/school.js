var mongoose = require('mongoose');

var SchoolSchema = new mongoose.Schema({
    schoolName: String, 
    webSite: String,
    gender: String, 
    format: String, 
    contactName: String,
    contactNo: Number, 
    email: String, 
    country: String
});

module.exports = mongoose.model('School',SchoolSchema);