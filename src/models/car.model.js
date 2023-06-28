module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define("car",{
    car_regis_number:{
      type: Sequelize.STRING
    },
    brand:{
      type: Sequelize.STRING
    },
    province:{
      type: Sequelize.STRING
    },
    color:{
      type: Sequelize.STRING
    },
    car_type:{
      type: Sequelize.STRING
    },
    is_approved:{
      type: Sequelize.BOOLEAN
    },
    is_active:{
      type: Sequelize.BOOLEAN,
    },
    attached_file:{
      type: Sequelize.STRING
    }
  })

  return Car;
}