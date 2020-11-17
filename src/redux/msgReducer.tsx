import { msgObjActionType, msgObjType } from '../types';
import { addMsg } from '../api';

const initialState = { msgs: [] as Array<msgObjType> };
export type initialStateType = typeof initialState;

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

export const addMsgThunk = (msgObj: msgObjType) => {
    debugger
    return async (dispatch: any) => {
        debugger
        const result = await addMsg(msgObj);
        debugger
        console.log(result)
        // users.forEach(user => {
        //     if(user.login === login && user.password === password) {
        //         dispatch(setLoggedAC(login, user.id));
        //         dispatch(setGenderAC(user.gender));
        //     }
        // });
    }
}

export default msgReducer;