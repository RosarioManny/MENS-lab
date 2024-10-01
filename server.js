const dotenv = require("dotenv")
dotenv.config();

const express = require("express");
const mongoose = require("mongoose")
const morgan = require("morgan")
const methodOverride = require("method-override")

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(morgan("dev"));

const Planet = require("./model/planets.js");
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

app.get("/", async (req, res) => { // HOME ROOT
    res.render("index.ejs")
});

app.get("/planets/new", async (req, res) => { // NEW 
    res.render("planets/new.ejs")
});

app.post("/planets", async (req,res) => { // CREATE
    await Planet.create(req.body)
    res.redirect("/planets");
});

app.get("/planets", async (req,res) => { // INDEX
    const allPlanets = await Planet.find()
    res.render("planets/index.ejs", { planets: allPlanets })
});

app.get("/planets/:planetId", async (req, res) => { // SHOW ONE
    const foundPlanet = await Planet.findById(req.params.planetId)
    res.render("planets/show.ejs", { planet: foundPlanet })
});

app.delete("/planets/:planetId", async (req, res) => {
    await Planet.findByIdAndDelete(req.params.planetId)
    res.redirect("/planets")
});

app.get("/planets/:planetId/edit", async (req, res) => { // EDIT PAGE
    const foundPlanet = await Planet.findById(req.params.planetId)
    res.render("planets/edit.ejs", { planet: foundPlanet })
});

app.put("/planets/:planetId", async (req, res) => { // EDIT MADE
    await Planet.findByIdAndUpdate(req.params.planetId, req.body);
    res.redirect(`/planets/${req.params.planetId}`)
});


app.listen(3000, () => {
    console.log("Listening to port 3000")
});