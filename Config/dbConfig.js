module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "studentrecordcms",
  DB: "railway",
  dialect: "mysql",
  // PORT : 7217,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};