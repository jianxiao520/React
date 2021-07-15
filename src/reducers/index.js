import { combineReducers } from "redux";
import auth from './auth';
import nav from './nav';
// 组合 Reducers
export default combineReducers({
    auth, nav
});