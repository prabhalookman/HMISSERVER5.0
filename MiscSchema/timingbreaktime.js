import { gql } from 'apollo-server-express';

export default gql`
type TimingBreaktime {
  end_time: String
  start_time: String
}

input timingBreaktimeInput {

}

extend type Query {
    getTimingBreaktime: [TimingBreaktime]
}

extend type Mutation {
    addTimingBreaktime(input: timingBreaktimeInput): TimingBreaktime
    updateTimingBreaktime(timingBreaktimeID: ID!, input: timingBreaktimeInput): TimingBreaktime
    deleteTimingBreaktime(timingBreaktimeID: ID!): TimingBreaktime
}
`