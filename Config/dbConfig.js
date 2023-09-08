module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "students_cms",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  