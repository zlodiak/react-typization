import { msgObjActionType, msgObjType } from '../types';

const initialState = { msgs: [] as Array<msgObjType> };
type initialStateType = typeof initialState;

const msgReducer = function msgReducer(state = initialState, action: msgObjActionType): initialStateType {
    switch(action.type) {
        case 'ADD_MSG': {
            state = {
                ...state,
                msgs: [ ...state.msgs, action.payload ]
            };
            break;
        }              
        default:
            return state;
    }
    return state;
}

export const addMsgAC = (msgObj: msgObjType): msgObjActionType => {
    return { type: 'ADD_MSG', payload: msgObj }
}

export default msgReducer;