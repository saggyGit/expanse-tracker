const mongoose = require("mongoose");


//mongodb://localhost:27017/myexpense

mongoose.connect("mongodb://localhost:27017/myexpense");


module.exports = mongoose;