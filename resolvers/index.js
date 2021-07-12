import siteResolver from './site'
import workspaceResolver from './workspace'
const { GraphQLDateTime } = require('graphql-iso-date')

// const customScalarResolver = {
//     DateTime : GraphQLDateTime
// };
//customScalarResolver

export default [siteResolver, workspaceResolver]