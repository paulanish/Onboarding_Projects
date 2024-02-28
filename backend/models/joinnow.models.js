// joinnow.models.js

const { DataTypes } = require('sequelize'); // Import DataTypes from Sequelize

module.exports = (sequelize, Sequelize) => {
  const JoinNow = sequelize.define('joinnow', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    joinDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    membershipType: {
      type: DataTypes.ENUM('basic', 'premium', 'vip'),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return JoinNow;
};




    // // model.js

// const { Sequelize, DataTypes } = require('sequelize');
// // const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
// //   host: 'localhost',
// //   dialect: 'postgres', // or any other dialect you are using
// // });

// const JoinNowModel = sequelize.define('JoinNow', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   joinDate: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   membershipType: {
//     type: DataTypes.ENUM('basic', 'premium', 'vip'),
//     allowNull: false,
//   },
//   location: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// // (async () => {
// //   await JoinNowModel.sync({ force: true }); // This will create the table if it doesn't exist. Use with caution as it will drop the existing table and recreate it.
// //   console.log("The table for the JoinNow model was just (re)created!");
// // })();

// module.exports = JoinNowModel;
