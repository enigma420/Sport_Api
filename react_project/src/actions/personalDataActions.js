import axios from "axios";
import {GET_ERRORS, GET_PERSONALDATA} from "./types";

export const createPersonalData = (personalData,history) => async dispatch => {
    try{
        await axios.post("/api/personalData", personalData);
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

export const getPersonalData = (pesel,history) => async dispatch => {

    try{
        const res = await axios.get(`/api/personalData/${pesel}`);
        dispatch({
            type: GET_PERSONALDATA,
            payload: res.data
        })
    }catch (err) {

    }
};