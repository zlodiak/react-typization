import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { addMsgAC } from '../../redux/msgReducer';
import { msgObjType } from '../../types';

const Page1: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();

    function submit(): void {
        if(!name.trim() || !email.trim() || !msg.trim()) {
            return;
        }
        const msgObj: msgObjType = {
            name,
            email,
            msg,
        };
        console.log(msgObj)
        dispatch(addMsgAC(msgObj));
        setName('');
        setEmail('');
        setMsg('');
    }

    return (
        <>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="name" 
                    onChange={ e => setName(e.target.value) } 
                    value={ name }
                />
                <br/>
                <input 
                    type="email" 
                    placeholder="email" 
                    onChange={ e => setEmail(e.target.value) } 
                    value={ email }
                />
                <br/>
                <textarea 
                    placeholder="message" 
                    onChange={ e => setMsg(e.target.value) } 
                    value={ msg }>
                </textarea>
                <br/>
                <button onClick={ submit }>submit</button>
            </div>
        </>
    );
}

export default Page1;