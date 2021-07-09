import siteResolver from './site'
import userResolver from './user'

const customScalarResolver = {
    Date : GraphQLDateTime
};

export default [customScalarResolver, siteResolver, userResolver]