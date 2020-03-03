import { GET_PERSONALDATA } from "../actions/types";

const initialState = {
    personalData: {}
};

export default function(state = initialState, action){
    switch(action.type){

        case GET_PERSONALDATA:
            return {
                ...state,
                personalData: action.payload
            };

        default:
            return state;
    }
}