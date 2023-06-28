const express = require('express');
const app = express.Router();
const controller = require('../controllers/others.controller')

app.get("/car_type", controller.findAllCarTypes)
app.get("/card_type", controller.findAllCardTypes)
app.get("/brand", controller.findAllBrands)
app.get("/province", controller.findAllProvinces)
app.get("/color", controller.findAllColors)


module.exports = app
