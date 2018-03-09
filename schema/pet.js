export default `
    type Pet {
        id: Int!
        name: String!
        image: String!
        about: String!
        food: String!
        user: User!
    }

    type Query {
        getPet(id: Int!): Pet
        usersPets(owner: Int): [Pet!]!
        allPets: [Pet!]!
    }

    type petAddedResponse {
        ok: Boolean!
    }

    type Mutation {
        addPet(name: String!, image: String, about: String, food: String):petAddedResponse
    }
`;
