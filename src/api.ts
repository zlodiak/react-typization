import { API_URL } from './config'; 
import { msgObjType } from './types';

export function addMsg(msgObj: msgObjType) {
    return fetch(`${ API_URL }/msgs`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(msgObj)
    })    
}

export const getMsgs = fetch(`${ API_URL }/msgs`)
    .then(response => response.json());