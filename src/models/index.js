const dbConfig = require("../db.js")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool:{
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cars = require("./car.model")(sequelize, Sequelize);
db.cards = require("./card.model")(sequelize, Sequelize);
db.card_types = require("./card_type.model")(sequelize, Sequelize);
db.brands = require("./brand.model")(sequelize, Sequelize);
db.provinces = require("./province.model")(sequelize, Sequelize);
db.colors = require("./color.model")(sequelize, Sequelize);
db.car_types = require("./car_type.model")(sequelize, Sequelize);

// define relationship card <-->> car
db.cards.hasMany(db.cars, { as: "cars" })
db.cars.belongsTo(db.cards, {
  foreignKey: "cardId",
  as: "card"
})

// define relationship card_type <-->> card
db.card_types.hasMany(db.cards, { as: "cards" })
db.cards.belongsTo(db.card_types,{
  foreignKey: "cardTypeId",
  as: "card_type"
})

module.exports = db;

