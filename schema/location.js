import { gql } from 'apollo-server-express';

export default gql`
type Loation {
  _id: ID
  active: Boolean
  app_integration_need: Boolean
  created_at: DateTime
  deleted: Boolean
  deleted_at: DateTime
  name: String
  type: String
  type_param: Boolean
  updated_at: DateTime
}

input locationInput {

}

extend type Query {
    getLocation: [Loation]
}

extend type Mutation {
    addLocation(input: locationInput): Loation
    updateLocation(locationID: ID!, input: locationInput): Loation
    deleteLocation(locationID: ID!): Loation
}
`