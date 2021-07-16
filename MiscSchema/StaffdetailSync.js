import { gql } from 'apollo-server-express';

export default gql`
type StaffdetailSync {
  key: String
  type: String
}

input staffdetailSyncInput {

}

extend type Query {
    getStaffdetailSync: [StaffdetailSync]
}

extend type Mutation {
    addStaffdetailSync(input: staffdetailSyncInput): StaffdetailSync
    updateStaffdetailSync(staffdetailSyncID: ID!, input: staffdetailSyncInput): StaffdetailSync
    deleteStaffdetailSync(staffdetailSyncID: ID!): StaffdetailSync
}
`