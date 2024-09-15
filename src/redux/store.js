import { createStore } from 'redux';
import reduserUserInfo from './redusers/index';
const store = createStore(reduserUserInfo);
export default store;
