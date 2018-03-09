export default `
    type Walker {
        id: Int!
        signature: String!
        aboutme: String!
        hourlyrates: Int!
        employee: Int!
        users: [User!]!
        user: User!
    }

    type Query {
        getWalker(id:Int!): Walker
        allWalkers: [Walker!]!
        searchedWalkers(firstname: String!): [Walker!]!
    }

    type walkerRegisterResponse {
        ok: Boolean!
    }

    type Mutation {
        registerWalker(signature: String!):walkerRegisterResponse
        addEmployee(walkerId: Int!, user_id: Int!, employed: Boolean!): Boolean

    }
`;
