module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "sky@123",
    DB: "mvcdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  