const express = require('express');
const app = express.Router();
const controller = require('../controllers/authen.controller')

app.post("/", controller.authen);

module.exports = app