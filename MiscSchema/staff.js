import { gql } from 'apollo-server-express';

export default gql`
type Staff {
  _id: ID
  avatar_or_icon: String
  avatar_or_icon_path: String
  color_code: String
  created_at: String
  created_by: Staff
  deleted_at: String
  description: String
  display_name: String
  email: String
  email_verified_date_time: String
  employement_from: String
  employement_to: String
  experience_month: Int
  experience_year: Int
  first_name: String
  gender: String
  is_active: Boolean
  is_email_verified: Boolean
  last_name: String
  name: String
  phone: [StaffPhone]
  showSocialShare: Boolean
  site_id: Site
  site_owener: Boolean
  slug: String
  social_network: [StaffSocial_network]
  sortingId: Int
  staff_detail_id: [Staffdetail]
  title: String
  updated_at: String
  user_id: User
  workspace_ids: [Workspace]
}

input staffInput {

}

extend type Query {
    getStaff: [Staff]
}

extend type Mutation {
    addStaff(input: staffInput): Staff
    updateStaff(staffID: ID!, input: staffInput): Staff
    deleteStaff(staffID: ID!): Staff
}
`