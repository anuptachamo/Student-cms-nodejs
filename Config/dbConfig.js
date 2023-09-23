module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "studentrecordscms",
  dialect: "mysql",
  // PORT : 7217,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};