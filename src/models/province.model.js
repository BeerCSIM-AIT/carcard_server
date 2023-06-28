module.exports = (sequelize, Sequelize) => {
  const Province = sequelize.define("province",{
    name:{
      type: Sequelize.STRING
    },
    abbr:{
      type: Sequelize.STRING
    }
  })

  return Province;
}