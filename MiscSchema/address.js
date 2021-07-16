import { gql } from 'apollo-server-express';

export default gql`
type Address {
  _id: ObjectId
  accessible: Boolean
  account_status: String
  active: Boolean
  address1: String
  address2: String
  business_branch: Boolean
  business_head_ofice: Boolean
  city: String
  country: String
  created_at: DateTime
  created_by: Staff
  default_address: Boolean
  delete: Boolean
  deleted_at: DateTime
  email: String
  latitude: String
  longitude: String
  phone: [AddressPhone]
  site_id: Site
  state: String
  type: String
  updated_at: DateTime
  workspace_id: [Workspace]
  zipCode: String
}

input addressInput {

}

extend type Query {
    getAddress: [Address]
}

extend type Mutation {
    addAddress(input: addressInput): Address
    updateAddress(addressID: ID!, input: addressInput): Address
    deleteAddress(addressID: ID!): Address
}
`