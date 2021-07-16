import { gql } from 'apollo-server-express';
import siteSchema from './site'
import workspaceSchema from './workspace'
import locationSchema  from './location'
import loationSettingSchema  from './locationsetting'
import businessSchema  from './business'
import businessInfoSchema  from './businessinfo'
import eventCategorySchema  from './eventcategory'
import eventsSchema  from './events'
import addOnSchema  from './addons'

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
export default [baseSchema, siteSchema, workspaceSchema, locationSchema, loationSettingSchema, businessSchema, businessInfoSchema, eventCategorySchema, eventsSchema, addOnSchema ]