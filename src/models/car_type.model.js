module.exports = (sequelize, Sequelize) => {
  const CarType = sequelize.define("car_type",{
    name:{
      type: Sequelize.STRING
    }
  })

  return CarType;
}