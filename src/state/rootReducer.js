import userReduce from './user';
import merchantReducer from './merchant';
import displayReducer from './display';
import cartReducer from './cart';

const rootReducer = {
  user: userReduce,
  merchant: merchantReducer,
  display: displayReducer,
  cart: cartReducer,
};

export default rootReducer;
