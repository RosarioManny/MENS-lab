const dotenv = require("dotenv")
dotenv.config();

const express = require("express");
const app = express();

const mongoose = require("mongoose")
const morgan = require("morgan")
const methodOverride = require("method-override")
const Planet = require("./model/planets.js");

app.listen(3000, () => {
    console.log("Listening to port 3000")
})
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(morgan("dev"));

app.get("/", async (req, res) => { // HOME ROOT
    res.render("index.ejs")
});

app.get("/planets/new", async (req, res) => {
    res.render("planets/new.ejs")
});

app.post("/planets", async (req,res) => {
    await Planet.create(req.body)
    res.redirect("/planets")
})

// app.get("/planets", async (req, res) => { // planets LISTS
//     const allplanets = await Planet.find();
//     res.render("planets/index.ejs", { planets: allplanets })
// });