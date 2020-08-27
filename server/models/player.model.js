console.log("player.model.js");

const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Player name is required!"],
        minlength: [2, "Name must be 2 characters or longer!"]
    },
    position: {
        type: String
    }, 
    status: {
        type: String
    }, 
    games: [String]

}, {timestamps: true});

module.exports = mongoose.model("Player", PlayerSchema);