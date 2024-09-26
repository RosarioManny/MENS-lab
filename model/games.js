const mongoose = require("mongoose")

const vgSchema = new mongoose.Schema ({
    Title: "String", required: true,
    Rating: Number, required: true,
    Description: "String",
});

const vGame = mongoose.model("vGame", vgSchema)