module.exports = (sequelize, Sequelize) => {
  const Card = sequelize.define("card",{
    emp_id:{
      type: Sequelize.STRING
    },
    issue_date:{
      type: Sequelize.DATE
    },
    expire_date:{
      type: Sequelize.DATE
    },
    issued_by:{
      type: Sequelize.STRING
    },
    remark:{
      type: Sequelize.STRING
    }
  })

  return Card;
}