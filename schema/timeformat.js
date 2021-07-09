import { gql } from 'apollo-server-express';

export default gql`
type Timeformat {
  _id: ID
  business_hour_end: Int
  business_hour_start: Int
  date_format: String
  first_day: Int
  site_id: ID
  timeFormat: Int
  time_zone: String
  workspace_id: ID
}

input timeFormatInput {

}

extend type Query {
    getTimeFormat: [Timeformat]
}

extend type Mutation {
    addTimeFormat(input: timeFormatInput): Timeformat
    updateTimeFormat(timeformatID: ID!, input: timeFormatInput): Timeformat
    deleteTimeFormat(timeformatID: ID!): Timeformat
}
`