import { gql } from 'apollo-server-express';

export default gql`
type Role {
  _id: ID
  active: Boolean
  createdOn_utc: DateTime
  delete: Boolean
  is_system_role: Boolean
  name: String
  permission_ids: [Permission]
  site_id: Site
  system_name: String
  workspace_id: Workspace
}

input roleInput {

}

extend type Query {
    getRole: [Role]
}

extend type Mutation {
    addRole(input: roleInput): Role
    updateRole(roleID: ID!, input: roleInput): Role
    deleteRole(roleID: ID!): Role
}
`