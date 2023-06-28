module.exports = (sequelize, Sequelize) => {
  const CardType = sequelize.define("card_type",{
    name:{
      type: Sequelize.STRING
    }
  })

  return CardType;
}