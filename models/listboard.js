export default (sequelize, DataTypes) => {
  const ListBoard = sequelize.define("listboard", {
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN
  });

  ListBoard.associate = models => {
    ListBoard.belongsTo(models.User, {
      through: "board_member",
      foreignKey: {
        name: "userId",
        field: "user_id"
      }
    });
  };
  return ListBoard;
};
