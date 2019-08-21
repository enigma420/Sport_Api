import axios from "axios";

export const addEvent = (eventslog_id, event, history) => async dispatch => {

  await axios.post(`/api/eventslog/${eventslog_id}`, event);
  history.push(`/eventBoard/${eventslog_id}`);

};