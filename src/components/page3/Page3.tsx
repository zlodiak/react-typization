import React, { useState } from 'react';
import { addMsgThunk } from '../../redux/msgReducer';
import { msgObjType } from '../../types';
import { connect } from 'react-redux';

const Page3: React.FC<any> = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

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
        props.addMsgThunk(msgObj, () => { setName(''); setEmail(''); setMsg('') });
    }

    return (
        <>
            add message only to store
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

export default connect(null, { addMsgThunk })(Page3);