import { gql } from 'apollo-server-express';

export default gql`
type Site {
    _id: ID
    accessible: Boolean
    account_status: String
    active: Boolean
    created_at: DateTime
    created_by: ID
    default_language: String
    delete: Boolean
    deleted_at: DateTime
    googleAnalyticsCode: String
    name: String
    payment_status: String
    payment_status_id: String
    subcription_id: ID
    suspended: Boolean
    updated_at: DateTime
}

input siteInput {

}

extend type Query {
    getSite: [Site]
}

extend type Mutation {
    addSite(input: siteInput): Site
    updateSite(siteID: ID!, input: siteInput): Site
    deleteSite(siteID: ID!): Site
}
`