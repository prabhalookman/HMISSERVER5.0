import { gql } from 'apollo-server-express';
import siteSchema from './site'
import workspaceSchema from './workspace'

const baseSchema = gql`
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
// scalar Date
export default [baseSchema, siteSchema, workspaceSchema ]