export default (sequelize, DataTypes) => {
  const Message = sequelize.define("message", {
    text: DataTypes.STRING
  });

  Message.associate = models => {
    Message.belongsTo(models.Walker, {
      foreignKey: {
        name: "walkerId",
        field: "walker_id"
      }
    });
    Message.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        field: "user_id"
      }
    });
    Message.belongsTo(models.Channel, {
      foreignKey: {
        name: "channelId",
        field: "channel_id"
      }
    });
    Message.belongsTo(models.ListBoard, {
      foreignkey: {
        name: "boardId",
        field: "board_id"
      }
    });
  };
  return Message;
};
