const mongoose = require("mongoose")

const vgSchema = new mongoose.Schema ({
    Title:  { type: "String", required: true },
    Rating: { type: Number, required: true }, 
    Description: "String",
});

const vGame = mongoose.model("vGame", vgSchema)

module.export = vGame