import { gql } from 'apollo-server-express';

export default gql`
type Business {
  _id: ID
  accessible: Boolean
  active: Boolean
  avatar_or_icon: String
  avatar_or_icon_path: String
  business_branch: String
  business_info_ids: [Businessinfo]
  color_code: String
  created_at: DateTime
  created_by: Staff
  delete: Boolean
  deleted_at: DateTime
  description: String
  display_name: String
  email_signature: String
  name: String
  showSocialShare: Boolean
  site_id: Site
  social_network: [BusinessSocial_network]
  staff_size: Int
  type: String
  updated_at: DateTime
  web_url: String
  workspace_id: [Workspace]
}

input businessInput {

}

extend type Query {
    getBusiness: [Business]
}

extend type Mutation {
    addBusiness(input: businessInput): Business
    updateBusiness(businessID: ID!, input: businessInput): Business
    deleteBusiness(businessID: ID!): Business
}
`