import { gql } from 'apollo-server-express';

export default gql`
type Locationsetting {
  _id: ID
  active: Boolean
  created_at: DateTime
  created_by: Staff
  deleted: Boolean
  deleted_at: DateTime
  inperson: LocationsettingInperson
  location_id: Location
  oncall: LocationsettingOncall
  site_id: Site
  updated_at: DateTime
  video: LocationsettingVideo
  workspace_id: Workspace
}

input locationSettingInput {

}

extend type Query {
    getLocationsetting: [Locationsetting]
}

extend type Mutation {
    addLocationsetting(input: locationSettingInput): Locationsetting
    updateLocationsetting(locationSettingID: ID!, input: locationSettingInput): Locationsetting
    deleteLocationsetting(locationSettingID: ID!): Locationsetting
}
`