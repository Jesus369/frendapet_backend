export default (sequelize, DataTypes) => {
  const Walker = sequelize.define("walker", {
    signature: DataTypes.STRING,
    aboutme: DataTypes.STRING,
    hourlyrates: DataTypes.INTEGER
  });

  Walker.associate = models => {
    Walker.belongsToMany(models.User, {
      through: "walkertoclient",
      foreignKey: {
        name: "walkerId",
        field: "walker_id"
      }
    });

    Walker.belongsTo(models.User, {
      foreignKey: "employee"
    });
  };
  return Walker;
};
