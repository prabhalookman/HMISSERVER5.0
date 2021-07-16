import { gql } from 'apollo-server-express';

export default gql`
type User {
  _id: ID
  active: Boolean
  delete: Boolean
  is_owener: Boolean
  paccess: ID
  role_ids: [Role]
  site_id: Site
  workspace_ids: [Workspace]
}

input userInput {

}

extend type Query {
    getUser: [User]
}

extend type Mutation {
    addUser(input: userInput): User
    updateUser(userID: ID!, input: userInput): User
    deleteUser(userID: ID!): User
}
`