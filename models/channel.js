export default (sequelize, DataTypes) => {
  const Channel = sequelize.define("channel", {
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN
  });

  Channel.associate = models => {
    Channel.belongsTo(models.User, {
      through: "channel_member",
      foreignKey: {
        name: "userId",
        field: "user_id"
      }
    });
  };
  return Channel;
};
