module.exports = (sequelize, Sequelize) => {
  const Color = sequelize.define("color",{
    name:{
      type: Sequelize.STRING
    }
  })

  return Color;
}