import { set } from "../Action/Action";

const initialstate = {
    index: 0

}


const indexReducer = (state = initialstate, action) => {
    switch (action.type) {
        case set:
           return {...state, index: action.payload }
        default:
            return state;
    }
}
export default indexReducer;