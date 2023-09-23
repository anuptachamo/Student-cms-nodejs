module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("students_detail", {
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      grade: {
        type: DataTypes.INTEGER, // Define the field as an INTEGER type
        allowNull: false,
        validate: {
          isInt: true, // Add a validation rule to check if the value is an integer
        },
      },
      rollno: {
        type: DataTypes.INTEGER, // Define the field as an INTEGER type
        allowNull: false,
        validate: {
          isInt: true, // Add a validation rule to check if the value is an integer
        },
      },
      age: {
        type: DataTypes.INTEGER, // Define the field as an INTEGER type
        allowNull: false,
        validate: {
          isInt: true, // Add a validation rule to check if the value is an integer
        },
      },
      contactno: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    
    });
    return Student;
  };
