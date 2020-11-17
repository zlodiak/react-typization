export type msgObjType = {
    name: string
    email: string
    msg: string
}

export type msgObjActionType = {
    type: string
    payload: msgObjType
}

export type stateType = { 
    msgReducer: msgObjType[]
}