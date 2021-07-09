import { gql } from 'apollo-server-express';

export default gql`
  type TimingBreaktime {
  _id: ObjectId
  business_hour_end: Int
  business_hour_start: Int
  date_format: String
  first_day: Int
  site_id: ObjectId
  timeFormat: Int
  time_zone: String
  workspace_id: ObjectId
}

input timingBreaktimeInput {

}

extend type Query {
    getTimingBreaktime: [TimingBreaktime]
}

extend type Mutation {
    addTimingBreaktime(timingBreaktime: timingBreaktimeInput): TimingBreaktime
    updateTimingBreaktime(timingBreaktimeID: ID!, TimingBreaktime: timingBreaktimeInput): TimingBreaktime
    deleteTimingBreaktime(timingBreaktimeID: ID!): TimingBreaktime
}
`