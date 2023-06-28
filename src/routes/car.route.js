const express = require('express');
const app = express.Router()
const carController = require('../controllers/car.controller');

function addFileName(req, res, next) {
  req.filename = Date.now() + ".pdf"
  next();
}

app.use(addFileName)

app.get("/", carController.findAll)
app.get("/:id", carController.findCarById)
app.get("/card/:card_id", carController.findCarByCardId)
app.get('/regis/:regis',carController.findCarByRegisNumber)
app.post("/", carController.createCar)


module.exports = app