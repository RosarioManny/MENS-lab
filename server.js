// EXPRESS
const express = require("express");
const app = express();
// DOTENV
const dotenv = require("dotenv")
dotenv.config();
// MONGO
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI) // Connection to MONGODB Database