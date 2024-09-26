// CONST
const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
// CALLING FUNCTIONS
dotenv.config();
mongoose.connect(process.env.MONGODB_URI) // Connection to MONGODB Database

// vvvvvvvvvvvvvvvvvvv CONNECTION CHECK vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

app.listen(3000, ()=> {
    console.log("Listening to port 3000")
})
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})
// vvvvvvvvvvvvvvvvvvv ROUTES vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

app.get("/", async (req, res) => {
    res.render("index.ejs")
});
