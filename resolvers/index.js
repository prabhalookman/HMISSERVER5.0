import siteResolver from './site'
import workspaceResolver from './workspace'
import locationResolver from './location'
import locationSettingResolver from './locationsetting'

const { GraphQLDateTime } = require('graphql-iso-date')

// const customScalarResolver = {
//     DateTime : GraphQLDateTime
// };
//customScalarResolver

export default [siteResolver, workspaceResolver, locationResolver, locationSettingResolver]