export default `
    type User {
        id: String!
        firstname: String!
        lastname: String!
        zip: Int!
        phone: Int!
        email: String!
        password: String!
    }

    type Query {
        getUser(id: Int!): User!
        allUsers: [User!]!
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

    type Mutation {
        register(firstname: String!, lastname: String!, email: String!, password: String!):RegisterResponse!
        login(email: String!, password: String!):LoginResponse!
    }
`;
