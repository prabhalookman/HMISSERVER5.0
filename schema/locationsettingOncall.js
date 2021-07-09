import { gql } from 'apollo-server-express';

export default gql`
type LocationsettingOncall {
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

input locationsettingOncallInput {

}

extend type Query {
    getLocationsettingOncall: [LocationsettingOncall]
}

extend type Mutation {
    addLocationsettingOncall(input: locationsettingOncallInput): LocationsettingOncall
    updateLocationsettingOncall(locationsettingOncallID: ID!, input: locationsettingOncallInput): LocationsettingOncall
    deleteLocationsettingOncall(locationsettingOncallID: ID!): LocationsettingOncall
}
`