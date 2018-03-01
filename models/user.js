export default (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  });

  User.associate = models => {
    User.belongsToMany(models.Channel, {
      through: "channel_member",
      foreignKey: {
        name: "userId",
        field: "user_id"
      }
    });

    User.belongsToMany(models.ListBoard, {
      through: "board_member",
      foreignKey: {
        name: "userId",
        field: "user_id"
      }
    });

    User.belongsToMany(models.Walker, {
      through: "walkertoclient",
      foreignKey: {
        name: "userId",
        field: "user_id"
      }
    });
  };
  return User;
};
