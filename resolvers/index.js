import siteResolver from './site'
import workspaceResolver from './workspace'
import locationResolver from './location'
import locationSettingResolver from './locationsetting'
import businessResolver from './business'
import businessInfoResolver from './businessInfo'
import eventCategoryResolver from './eventcategory'
import eventsResolver from './events'
import addonsResolver from './addons'
import roleResolver  from './role'
import userResolver  from './user'
import timeformatResolver  from './timeformat'
import timingsResolver  from './timings'

const { GraphQLDateTime } = require('graphql-iso-date')

// const customScalarResolver = {
//     DateTime : GraphQLDateTime
// };
//customScalarResolver

export default [siteResolver, workspaceResolver, locationResolver, locationSettingResolver, businessResolver, businessInfoResolver, eventCategoryResolver, eventsResolver, addonsResolver, roleResolver, userResolver, timeformatResolver, timingsResolver]