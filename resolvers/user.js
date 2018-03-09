import { tryLogin } from "../auth";
import joinMonster from "join-monster";

export default {
  Query: {
    // Joining user's walkers with getUser using joinMonster
    // Through Walkertoclient table
    getUser: (parent, args, { models }, info) =>
      joinMonster(info, args, sql =>
        models.sequelize.query(sql, {
          type: models.sequelize.QueryTypes.SELECT
        })
      ),
    // Fetching all users
    allUsers: (parent, args, { models }) => models.User.findAll()
    // Fetching the user's walkers
  },
  Mutation: {
    // Logging in the user
    login: (parent, { email, password }, { models, SECRET, SECRET2 }) =>
      tryLogin(email, password, models, SECRET, SECRET2),
    // Registering user
    register: async (parent, args, { models }) => {
      try {
        const user = await models.User.create(args);
        return {
          ok: true,
          user
        };
      } catch (err) {
        return {
          ok: false
        };
      }
    },
    // Adding a walker to the client
    addWalker: async (parent, args, { models }) => {
      await models.Walkertoclient.create(args);
      return true;
    }
  }
};
