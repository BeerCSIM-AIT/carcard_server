const db = require("../models");
const Card = db.cards;

exports.findCardById = (req, res) => {
  let id = req.params.id
  return Card.findByPk(id, { include: ["cars"] })
    .then((card)=>{
        res.send(card);
      }
    ).catch((err)=>{
      let msg = ">> findCardById(): Error while fetching a card: " + err.message;
      res.status(500).send({
        message: msg
      })
    })
};

exports.findCardByEmpId = (req, res) => {
  let emp_id = req.params.emp_id
  let card_type_id = 1    //filter only general card
  let cond = { emp_id: emp_id, cardTypeId: card_type_id }
  
  return Card.findAll({ include: ["cars"], where: cond })
    .then((cards)=>{
        res.send(cards);
      }
    ).catch((err)=>{
      let msg = ">> findCardById(): Error while fetching cards by emp_id: " + err.message;
      res.status(500).send({
        message: msg
      })
    })
};

exports.findAll = (req, res) => {
  return Card.findAll({
    include:['cars'],
  }).then((cards)=>{
    res.send(cards);
  }).catch((err)=>{
    let msg = ">> findAll(): Error while fetching cards: " + err.message;
    res.status(500).send({
      message: msg
    })
  });
}

exports.createCard = (req, res) => {
  let card = req.body
  return Card.create({
    emp_id: card.emp_id,
    issue_date: card.issue_date,
    expire_date: card.expire_date,
    issued_by: card.issued_by
  }).then((car)=>{
    console.log(">> Created card: ", JSON.stringify(card, null,4))
    res.send(car);
  }).catch((err)=>{
    let msg = ">> createCard(): Error while creating a card: " + err.message;
    res.status(500).send({
      message: msg
    })
  })
}
