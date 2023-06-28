const db = require("../models");
const Car = db.cars;
const Op = db.Sequelize.Op;
const uploadFile = require("../middleware/upload");

exports.findAll = (req, res) => {
  return Car.findAll()
    .then((cars) => res.send(cars))
    .catch((err) => {
      let msg = ">> findAll(): Error while fetching cars: " + err.message;
      res.status(500).send({
        message: msg,
      });
    });
};

exports.findCarById = (req, res) => {
  let id = req.params.id;
  return Car.findByPk(id, { include: ["card"] })
    .then((car) => {
      res.send(car);
    })
    .catch((err) => {
      let msg = ">> findCarById(): Error while fetching a car: " + err.message;
      res.status(500).send({
        message: msg,
      });
    });
};

exports.findCarByCardId = (req, res) => {
  let card_id = req.params.card_id;
  let cond = { card_id: card_id };
  return Car.findAll({ include: ["card"], where: cond })
    .then((car) => {
      res.send(car);
    })
    .catch((err) => {
      let msg = ">> findCarById(): Error while fetching a car: " + err.message;
      res.status(500).send({
        message: msg,
      });
    });
};

exports.findCarByRegisNumber = (req, res) => {
  let regis_number = req.params.regis;
  let cond = { car_regis_number: { [Op.like]: `${regis_number}%` } };
  return Car.findAll({ include: ["card"], where: cond })
    .then((cars) => {
      res.send(cars);
    })
    .catch((err) => {
      let msg = ">> findCarById(): Error while fetching a car: " + err.message;
      res.status(500).send({
        message: msg,
      });
    });
};

exports.createCar = async (req, res) => {
  try {
    console.log("Filename: " + req.filename);
    let currentDate = Date.now()
    let filename = currentDate + ".pdf";
    // console.log(req.file);
    await uploadFile(req, res)
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }   


    // res.status(200).send({
    //   message: "Uploaded the file successfully: " + req.file.originalname,
    // });    

    let cardId = req.body.card_id;
    return Car.create({
      car_regis_number: req.body.car_regis_number,
      brand: req.body.brand,
      province: req.body.province,
      color: req.body.color,
      car_type: req.body.car_type,
      is_approved: req.body.is_approved || true,
      is_active: req.body.is_active || true,
      cardId: cardId,
      attached_file: req.filename,
    })
      .then((car) => {
        console.log(">> Created car: ", JSON.stringify(car, null, 4));
        res.send(car);
      })
      .catch((err) => {
        msg = ">> createCar(): Error while creating a car: " + err.message;
        res.status(500).send({
          message: msg,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: `Could not upload the file:  ${error}`,
    });
  }
};

exports.updateCar = async (req, res) => {
  let id = req.body.id
}