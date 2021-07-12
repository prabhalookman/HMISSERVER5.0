const mongoose = require('mongoose');
import Site from './site';
import Workspace from './workspace';

const connectMongo = () => {
  return mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true, useFindAndModify: false, useUnifiedTopology: true})
}

const models = {
  Site,
  Workspace
}

export {connectMongo};
export default models;