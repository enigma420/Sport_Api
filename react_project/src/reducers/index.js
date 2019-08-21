import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import teamReducer from "./teamReducer";
import eventslogReducer from "./eventslogReducer";

export default combineReducers({
    errors: errorReducer,
    team: teamReducer,
    eventslog: eventslogReducer
});