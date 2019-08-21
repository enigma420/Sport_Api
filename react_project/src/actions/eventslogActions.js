import axios from "axios";
import {GET_ERRORS , GET_EVENTSLOG} from "./types";

export const addEvent = (eventslog_id, event, history) => async dispatch => {
try {
  await axios.post(`/api/eventslog/${eventslog_id}`, event);
  history.push(`/eventBoard/${eventslog_id}`);
  dispatch({
    type: GET_ERRORS,
    payload: {}
  });
  }catch (err) {
  dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  });

}
};

export const getEventslog = eventslog_id => async dispatch => {
    try{
        const res = await axios.get(`/api/eventslog/${eventslog_id}`);
        dispatch ({
            type: GET_EVENTSLOG,
            payload: res.data
        })
    }catch (err) {
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    });
    }
};