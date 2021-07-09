import { gql } from 'apollo-server-express';

export default gql`
type Businessinfo {
  _id: ID
  accessible: Boolean
  active: Boolean
  address_ids: [Address]
  bookingLinks: String
  business_category: [Businesscategory]
  business_hour_end: Int
  business_hour_start: Int
  created_at: DateTime
  created_by: Staff
  date_format: String
  delete: Boolean
  deleted_at: DateTime
  first_day: Int
  is_tax: Boolean
  policy: BusinessinfoPolicy
  restrictedDays: [DateTime]
  site_id: Site
  tax_no: String
  tax_percentage: Int
  timeFormat: Int
  time_zone: String
  timing_ids: [ID]
  updated_at: DateTime
  workspace_id: [Workspace]
}

input businessinfoInput {

}

extend type Query {
    getBusinessinfo: [Businessinfo]
}

extend type Mutation {
    addBusinessinfo(input: businessinfoInput): Businessinfo
    updateBusinessinfo(businessinfoID: ID!, input: businessinfoInput): Businessinfo
    deleteBusinessinfo(businessinfoID: ID!): Businessinfo
}
`