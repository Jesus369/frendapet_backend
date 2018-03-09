export default {
  Query: {
    getPet: async (parent, { id }, { models }) =>
      await models.Pet.findOne({ where: { id } }),
    usersPets: async (parent, { owner }, { models }) =>
      await models.Pet.findAll({ where: { owner } }, { raw: true }),
    allPets: async (parent, args, { models }) => await models.Pet.findAll()
  },
  Mutation: {
    addPet: async (parent, args, { models, user }) => {
      try {
        models.Pet.create({
          ...args,
          owner: user.id
        });
        return {
          ok: true
        };
      } catch (err) {
        return {
          ok: false
        };
      }
    }
  }
};
