import Sequelize from "sequelize";

const sequelize = new Sequelize("servicefido", "postgres", "postgres", {
  dialect: "postgres",
  define: {
    underscored: true
  }
});

const models = {
  Channel: sequelize.import("./channel"),
  User: sequelize.import("./user"),
  Comments: sequelize.import("./comments"),
  ListBoard: sequelize.import("./listboard"),
  Message: sequelize.import("./message"),
  Walker: sequelize.import("./walker")
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = sequelize;
export default models;
