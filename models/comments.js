export default (sequelize, DataTypes) => {
  const Comments = sequelize.define("comments", {
    text: DataTypes.STRING,
    likes: DataTypes.STRING
  });

  Comments.associate = models => {
    Comments.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        field: "user_id"
      }
    });

    Comments.belongsTo(models.Walker, {
      foreignKey: {
        name: "walkerId",
        field: "walker_id"
      }
    });

    Comments.belongsTo(models.ListBoard, {
      foreignKey: {
        name: "boardId",
        field: "board_id"
      }
    });

    Comments.belongsTo(models.Channel, {
      foreignKey: {
        name: "channelId",
        field: "channel_id"
      }
    });
  };
  return Comments;
};
