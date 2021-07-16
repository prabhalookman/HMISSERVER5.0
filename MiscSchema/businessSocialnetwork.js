import { gql } from 'apollo-server-express';

export default gql`

type BusinessSocial_network {
  link: String
  network: String
}

input businessSocialNetworkInput {
  link: String
  network: String
}

extend type Query {
    getBusinessSocialNetwork: [BusinessSocial_network]
}

extend type Mutation {
    addBusinessSocialNetwork(input: businessSocialNetworkInput): BusinessSocial_network
    updateBusinessSocialNetwork(businessinfoPolicyID: ID!, input: businessSocialNetworkInput): BusinessSocial_network
    deleteBusinessSocialNetwork(businessinfoPolicyID: ID!): BusinessSocial_network
}
`