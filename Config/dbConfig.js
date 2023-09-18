module.exports = {
  HOST: "containers-us-west-90.railway.app",
  USER: "root",
  PASSWORD: "O43sau4LL3S5JgzA9S48",
  DB: "railway",
  dialect: "mysql",
  PORT : 7217,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};