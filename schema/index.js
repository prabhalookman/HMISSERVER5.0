import { gql } from 'apollo-server-express';
import siteSchema from './site'
import userSchema from './user'

const baseSchema = gql`
scalar Date
type Query {
  _: String
}
type Mutation {
  _: String
}
type Subscription {
  _: String
}
`;
export default [baseSchema, siteSchema, userSchema ]