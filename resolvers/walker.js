import joinMonster from "join-monster";
export default {
  Walker: {
    user: ({ id }, args, { models }) => models.User.findOne()
  },
  Query: {
    getWalker: (parent, args, { models }, info) =>
      joinMonster(info, args, sql =>
        models.sequelize.query(sql, {
          type: models.sequelize.QueryTypes.SELECT
        })
      ),
    allWalkers: (parent, args, { models }, info) =>
      joinMonster(info, args, sql =>
        models.sequelize.query(sql, {
          type: models.sequelize.QueryTypes.SELECT
        })
      ),
    searchedWalkers: async (parent, args, { models, user }) =>
      models.Walker.findAll(
        {
          include: [
            {
              model: models.User,
              where: { firstname: args.firstname }
            }
          ]
        },
        { raw: true }
      )
  },

  Mutation: {
    registerWalker: async (parent, args, { models, user }) => {
      try {
        await models.Walker.create({ ...args, employee: user.id });
        return {
          ok: true
        };
      } catch (err) {
        console.log(err);
        return {
          ok: false
        };
      }
    },
    addEmployee: async (parent, args, { models, user }) => {
      await models.Useremployee.create(args);
      return true;
    }
  }
};
