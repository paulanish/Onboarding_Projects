
const config = require("../config/db.config.js");
const Sequelize =require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: 0,
  logging: false,
  timezone: 'utc',

 
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.joinNow = require("./joinnow.models.js")(sequelize, Sequelize);
db.USER = require("../models/user.model.js")(sequelize, Sequelize);


module.exports = db;