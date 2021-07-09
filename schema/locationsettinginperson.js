import { gql } from 'apollo-server-express';

export default gql`
type LocationsettingInperson {
  buinsess_address: Boolean
  buinsess_id: Business
  client_address: Boolean
}

input locationsettingInpersonInput {

}

extend type Query {
    getLocationsettingInperson: [LocationsettingInperson]
}

extend type Mutation {
    addLocationsettingInperson(input: locationsettingInpersonInput): LocationsettingInperson
    updateLocationsettingInperson(locationsettingInpersonID: ID!, input: locationsettingInpersonInput): LocationsettingInperson
    deleteLocationsettingInperson(locationsettingInpersonID: ID!): LocationsettingInperson
}
`