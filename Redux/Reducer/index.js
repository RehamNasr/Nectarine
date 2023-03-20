import { combineReducers } from "redux";
import indexReducer from "./indexReducer";
import ListReducer from "./ListReducer";
export default combineReducers({
    list:ListReducer,
    index:indexReducer
})