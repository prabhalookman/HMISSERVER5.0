import { gql } from 'apollo-server-express';

export default gql`
type Timing {
  _id: ID
  breaktime: [TimingBreaktime]
  business_hour: Boolean
  created_at: DateTime
  created_by: Staff
  custom_hour: Boolean
  deleted_at: DateTime
  end_time: String
  include_weekends: Boolean
  is_override_block: Boolean
  location_setting_ids: [Locationsetting]
  name: String
  recurringRule: TimingRecurringRule
  service_ids: [ID]
  site_id: Site
  start_time: String
  time_zone: String
  timing_order: Int
  type: String
  updated_at: DateTime
  work_day_duration: Int
  work_day_id: Int
  work_day_name: String
  workspace_ids: [Workspace]
}

input timingInput {

}

extend type Query {
    getTiming: [Timing]
}

extend type Mutation {
    addTiming(input: timingInput): Timing
    updateTiming(roleID: ID!, input: timingInput): Timing
    deleteTiming(roleID: ID!): Timing
}
`