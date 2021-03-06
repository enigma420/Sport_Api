import axios from "axios";
import {GET_ERRORS , GET_EVENTSLOG , GET_EVENT , DELETE_EVENT} from "./types";

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

export const getEvent = (eventslog_id,pt_id,history) => async dispatch => {
    try{
  const res = await axios.get(`/api/eventslog/${eventslog_id}/${pt_id}`);
  dispatch({
      type: GET_EVENT,
      payload: res.data
  });
    }catch (err) {
        history.push("/dashboard");
    }
};

export const updateEvent = (eventslog_id,pt_id,event,history) => async dispatch => {
    try{
        await axios.patch(`/api/eventslog/${eventslog_id}/${pt_id}`,event);
        history.push(`/eventBoard/${eventslog_id}`);
        dispatch({
            type:GET_ERRORS,
            payload: {}
        });
    }catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });

    }
};

export const deleteEvent = (eventslog_id,pt_id) => async dispatch => {
    if (
        window.confirm(
            `You are deleting event ${pt_id}, this action cannot be reverted`
        )
    ) {
        await axios.delete(`/api/eventslog/${eventslog_id}/${pt_id}`);
        dispatch({
            type: DELETE_EVENT,
            payload: pt_id
        });
    }
};