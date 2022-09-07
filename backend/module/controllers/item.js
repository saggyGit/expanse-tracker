const express = require("express");
const model = require("./../module/item");



//to create
exports.createItem = async(req, res) => {
    try {
        const newItem = await new model(req.body).save();
        res.json(newItem);
    } catch (err) {
        res.json(err);
    }

}


//getall
exports.getItem = async(req, res) => {
    try {
        const getmyitems = await model.find();
        res.json(getmyitems);
    } catch (err) {
        res.json(err);
    }

}


//getperticular
exports.getidItem = async(req, res) => {

        try {
            const getmyitems = await model.find({ _id: req.params.itemID });
            res.json(getmyitems);
        } catch (err) {
            res.json(err);
        }


    }
    // deleteall
exports.deleteItem = async(req, res) => {
        try {
            const deleted = await model.findOneAndDelete({ _id: req.params.itemID });
            res.json(deleted);
        } catch (err) {
            res.json(err);
        }
    }
    //editItem
exports.editItem = async(req, res) => {
    try {
        const updateitem = await model.findOneAndUpdate({ _id: req.params.itemID }, req.body, { new: true });
        res.json(updateitem);
    } catch {
        res.json(err);
    }
}