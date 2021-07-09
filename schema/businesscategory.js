import { gql } from 'apollo-server-express';

export default gql`
type Businesscategory {
  _id: ObjectId
  accessible: Boolean
  active: Boolean
  category_name: String
  created_at: DateTime
  created_by: Staff
  deleted: Boolean
  deleted_at: DateTime
  parant_category_id: Businesscategory
  site_id: ObjectId
  type: String
  updated_at: DateTime
}

input businesscategoryInput {

}

extend type Query {
    getBusinesscategory: [Businesscategory]
}

extend type Mutation {
    addBusinesscategory(input: businesscategoryInput): Businesscategory
    updateBusinesscategory(businesscategoryID: ID!, input: businesscategoryInput): Businesscategory
    deleteBusinesscategory(businesscategoryID: ID!): Businesscategory
}
`