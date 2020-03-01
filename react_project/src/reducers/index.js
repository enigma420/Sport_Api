import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import teamReducer from "./teamReducer";
import eventslogReducer from "./eventslogReducer";
import securityReducer from "./securityReducer";
import personalDataReducer from "./personalDataReducer";

export default combineReducers({
    errors: errorReducer,
    team: teamReducer,
    eventslog: eventslogReducer,
    personalData: personalDataReducer,
    security: securityReducer
});