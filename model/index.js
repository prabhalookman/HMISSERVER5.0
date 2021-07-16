const mongoose = require('mongoose');
import Site from './site';
import Workspace from './workspace';
import Location from './location';
import LocationSetting from './locationsetting';
import Business from './business';
import BusinessInfo from './businessInfo';
import EventCategory  from "./eventcategory"
import Event  from "./events"
import AddOn from "./addons"

const connectMongo = () => {
  return mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true, useFindAndModify: false, useUnifiedTopology: true})
}

const models = {
  Site,
  Workspace,
  Location,
  LocationSetting,
  Business,
  BusinessInfo,
  EventCategory,
  Event,
  AddOn
}

export {connectMongo};
export default models;