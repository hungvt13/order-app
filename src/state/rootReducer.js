import userReduce from './user';
import merchantReducer from './merchant';

const rootReducer = {
  user: userReduce,
  merchant: merchantReducer,
};

export default rootReducer;
