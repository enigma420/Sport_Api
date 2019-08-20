import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import teamReducer from "./teamReducer";

export default combineReducers({
    errors: errorReducer,
    team: teamReducer
});