import axios from "axios";
import {GET_ERRORS, GET_TEAMS, GET_TEAM} from "./types";

export const createTeam = (team,history) => async dispatch => {
    try{
        await axios.post("http://localhost:8080/api/team", team);
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    }catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const getTeams = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/team/all");
    dispatch({
        type: GET_TEAMS,
        payload: res.data
    });
};

export const getTeam = (id,history) => async dispatch => {

    try{
        const res = await axios.get(`http://localhost:8080/api/team/${id}`);
        dispatch({
            type: GET_TEAM,
            payload: res.data
        })
    }catch (err) {
        history.push("/dashboard");
    }

};

