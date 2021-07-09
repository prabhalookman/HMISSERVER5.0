import { gql } from 'apollo-server-express';

export default gql`

type LocationsettingVideo {
  integration_id: String
  type: String
}

input locationsettingVideoInput {

}

extend type Query {
    getLocationsettingVideo: [LocationsettingVideo]
}

extend type Mutation {
    addLocationsettingVideo(input: locationsettingVideoInput): LocationsettingVideo
    updateLocationsettingVideo(locationSettingID: ID!, input: locationsettingVideoInput): LocationsettingVideo
    deleteLocationsettingVideo(locationSettingID: ID!): LocationsettingVideo
}
`