import { gql } from 'apollo-server-express';

export default gql`

type Workspace {
    _id: ID
    accessible: Boolean
    active: Boolean
    color_code: String
    created_at: DateTime
    created_by: ID
    default_language: String
    delete: Boolean
    deleted_at: DateTime
    display_name: String
    display_order: Int
    is_owner: Boolean
    name: String
    new_business: Boolean
    site_id: Site
    time_zone: String
    type: String
    updated_at: DateTime
}

  input workspaceInput {

}

extend type Query {
    getSite: [Workspace]
}

extend type Mutation {
    addSite(input: workspaceInput): Workspace
    updateSite(workspaceID: ID!, input: workspaceInput): Workspace
    deleteSite(workspaceID: ID!): Workspace
}
`