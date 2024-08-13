import { createStore, combineReducers } from 'redux';
import dashboardReducer from '../reducers/dashboardReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer
});

const store = createStore(rootReducer);

export default store;