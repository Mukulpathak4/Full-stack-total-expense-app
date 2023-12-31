const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const Expense = sequelize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sellingprice: 
    {type: Sequelize.INTEGER,
        allowNull: false,

    },
    productname: {
        type: Sequelize.STRING,
        allowNull: false,
        distinct:true
    
    }
});
module.exports=Expense;