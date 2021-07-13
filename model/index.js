const mongoose = require('mongoose');
import Site from './site';
import Workspace from './workspace';
import Location from './location';
import LocationSetting from './locationsetting';

const connectMongo = () => {
  return mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true, useFindAndModify: false, useUnifiedTopology: true})
}

const models = {
  Site,
  Workspace,
  Location,
  LocationSetting
}

export {connectMongo};
export default models;