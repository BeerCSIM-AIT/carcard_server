const db = require("../models");
const CardType = db.card_types;
const CarType = db.car_types;
const Brand = db.brands;
const Province = db.provinces;
const Color = db.colors;

exports.findAllCardTypes = (req, res) => {
  return CardType.findAll()
    .then((cardTypes) => res.send(cardTypes))
    .catch((err) => {
      let msg = ">> findAll(): Error while fetching cars: " + err.message;
      res.status(500).send({
        message: msg,
      });
    });
};

exports.findAllCarTypes = (req, res) => {
  return CarType.findAll()
    .then((carTypes) => res.send(carTypes))
    .catch((err) => {
      let msg = ">> findAll(): Error while fetching cars: " + err.message;
      res.status(500).send({
        message: msg,
      });
    });
};

exports.findAllBrands = (req, res) => {
  return Brand.findAll()
    .then((brands) => res.send(brands))
    .catch((err) => {
      let msg = ">> findAll(): Error while fetching cars: " + err.message;
      res.status(500).send({
        message: msg,
      });
    });
};

exports.findAllProvinces = (req, res) => {
  return Province.findAll()
    .then((provinces) => res.send(provinces))
    .catch((err) => {
      let msg = ">> findAll(): Error while fetching cars: " + err.message;
      res.status(500).send({
        message: msg,
      });
    });
};

exports.findAllColors = (req, res) => {
  return Color.findAll()
    .then((colors) => res.send(colors))
    .catch((err) => {
      let msg = ">> findAll(): Error while fetching cars: " + err.message;
      res.status(500).send({
        message: msg,
      });
    });
};
