import { gql } from 'apollo-server-express';

export default gql`
type TimingRecurringRule {
  freq: String
  repeatEvery: Int
  until: DateTime  
}

input timingrecurringruleInput {

}

extend type Query {
    getTimingRecurringRule: [TimingRecurringRule]
}

extend type Mutation {
  addTimingRecurringRule(input: timingrecurringruleInput): TimingRecurringRule
  updateTimingRecurringRule(timingrecurringruleID: ID!, input: timingrecurringruleInput): TimingRecurringRule
  deleteTimingRecurringRule(timingrecurringruleID: ID!): TimingRecurringRule
}
`