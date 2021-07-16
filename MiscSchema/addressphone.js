import { gql } from 'apollo-server-express';

export default gql`
type AddressPhone {
  Ext: String
  country_code: String
  name: String
  no: String
  type: String
}

input addressPhoneInput {

}

extend type Query {
    getAddressPhone: [AddressPhone]
}

extend type Mutation {
    addAddressPhone(input: addressPhoneInput): AddressPhone
    updateAddressPhone(addressPhoneID: ID!, input: addressPhoneInput): AddressPhone
    deleteAddressPhone(addressPhoneID: ID!): AddressPhone
}
`