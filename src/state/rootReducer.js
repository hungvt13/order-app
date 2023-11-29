import userReduce from './user';
import merchantReducer from './merchant';
import displayReducer from './display';

const rootReducer = {
  user: userReduce,
  merchant: merchantReducer,
  display: displayReducer,
};

export default rootReducer;
