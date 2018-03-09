export default {
  Query: {
    fields: {
      getUser: {
        where: (table, empty, args) => `${table}.id = ${args.id}`
      },
      getWalker: {
        where: (table, empty, args) => `${table}.id = ${args.id}`
      }
    }
  },
  User: {
    sqlTable: "users",
    uniqueKey: "id",
    fields: {
      pets: {
        sqlColumn: "id",
        sqlJoin: (userTable, petTable) =>
          `${userTable}."id" = ${petTable}."owner"`
      },
      walker: {
        sqlColumn: "id",
        sqlJoin: (userTable, walkerTable) =>
          `${userTable}."id" = ${walkerTable}."employee"`
      },
      walkers: {
        junction: {
          sqlTable: '"walkertoclients"',
          include: {
            primary: {
              sqlColumn: "primary"
            }
          },
          sqlJoins: [
            (userTable, junctionTable) =>
              `${userTable}.id = ${junctionTable}."user_id"`,
            (junctionTable, walkerTable) =>
              `${junctionTable}."walker_id" = ${walkerTable}.id`
          ]
        }
      }
    }
  },
  Walker: {
    sqlTable: "walkers",
    uniqueKey: "id",
    fields: {
      // Associating the User to the Walker
      user: {
        sqlColumn: "id",
        sqlJoin: (walkerTable, userTable) =>
          `${walkerTable}."employee" = ${userTable}."id"`
      },
      users: {
        junction: {
          sqlTable: '"walkertoclients"',
          include: {
            primary: {
              sqlColumn: "primary"
            }
          },
          // Defining a many to many relationship between user and walker
          sqlJoins: [
            (walkerTable, junctionTable) =>
              `${walkerTable}.id = ${junctionTable}."walker_id"`,
            (junctionTable, userTable) =>
              `${junctionTable}."user_id" = ${userTable}.id`
          ]
        }
      }
    }
  },
  Pet: {
    sqlTable: "pets",
    uniqueKey: "id",
    fields: {
      user: {
        sqlColumn: "id",
        sqlJoin: (walkerTable, userTable) =>
          `${petTable}."owner" = ${userTable}."id"`
      }
    }
  }
};
