const mongoose = require("mongoose");



const itemModel = mongoose.Schema({
    itemName: String,
    price: Number,
    date: Date
})

module.exports = mongoose.model("items", itemModel);