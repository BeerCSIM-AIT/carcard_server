const express = require('express');
const app = express.Router()
const cardController = require('../controllers/card.controller');

app.get("/", cardController.findAll)
app.get("/:id", cardController.findCardById)
app.get("/emp/:emp_id",cardController.findCardByEmpId)
app.post("/", cardController.createCard)

module.exports = app