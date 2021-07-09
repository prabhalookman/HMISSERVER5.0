import { gql } from 'apollo-server-express';

export default gql`
type Permission {
  _id: ID
  category: String
  name: String
  site_id: Site
  system_name: String
  workspace_id: Workspace
}

input permissionInput {

}

extend type Query {
    getPermission: [Permission]
}

extend type Mutation {
    addPermission(input: permissionInput): Permission
    updatePermission(permissionID: ID!, input: permissionInput): Permission
    deletePermission(permissionID: ID!): Permission
}
`