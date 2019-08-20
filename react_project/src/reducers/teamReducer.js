import { GET_TEAMS, GET_TEAM } from "../actions/types";

const initialState = {
    teams: [],
    team: {}
};

export default function(state = initialState, action){
    switch(action.type){

        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload
            };

        case GET_TEAM:
            return {
                ...state,
                team: action.payload
            };

        default:
            return state;
    }
}