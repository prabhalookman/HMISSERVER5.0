import { gql } from 'apollo-server-express';

export default gql`
type StaffDetails {
  _id: ID
  address_ids: [Address]
  booking_url: String
  business_id: [Business]
  business_timings: Boolean
  created_at: DateTime
  created_by: Staff
  deafult_calendar_view: String
  deleted_at: DateTime
  invitationStatus: String
  is_active: String
  is_login: Boolean
  is_service_provider: Boolean
  is_sync_enabled: Boolean
  paid_plan_commission: Boolean
  services_id: [String]
  site_id: Site
  sortingId: Int
  staff_commission: Boolean
  sync: [StaffdetailSync]
  timing_ids: [Timing]
  updated_at: DateTime
  workspace_id: [Workspace]
}

input staffDetailsInput {

}

extend type Query {
    getStaffDetails: [StaffDetails]
}

extend type Mutation {
    addStaffDetails(input: staffDetailsInput): StaffDetails
    updateStaffDetails(staffDetailsID: ID!, input: staffDetailsInput): StaffDetails
    deleteStaffDetails(staffDetailsID: ID!): StaffDetails
}
`