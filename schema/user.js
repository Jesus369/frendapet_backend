export default `
    type User {
        id: Int!
        firstname: String!
        lastname: String!
        zip: Int!
        phone: Int!
        email: String!
        password: String!
        walker: Walker
        pets: [Pet!]!
        walkers: [Walker!]!
    }

    type Query {
        getUser(id: Int!): User!
        allUsers: [User!]!
        usersWalkers(id: Int!): [Walker!]!
    }

    type RegisterResponse {
        ok: Boolean!
        user: User
    }

    type LoginResponse {
        ok: Boolean!
        token: String
        refreshToken: String
    }

    type addWalkerResponse {
        ok: Boolean!
    }

    type Mutation {
        register(firstname: String!, lastname: String!, email: String!, password: String!):RegisterResponse!
        login(email: String!, password: String!):LoginResponse!
        addWalker(userId: Int!, walkerId: Int!): Boolean!
    }
`;
