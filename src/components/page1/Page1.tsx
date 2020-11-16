import React, { useState } from 'react';

function Page1() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    function submit() {
        console.log(name, email, msg);
    }

    return (
        <>
            <div className="form">
                <input type="text" placeholder="name" onChange={ e => setName(e.target.value) }/>
                <br/>
                <input type="email" placeholder="email" onChange={ e => setEmail(e.target.value) }/>
                <br/>
                <textarea placeholder="message" onChange={ e => setMsg(e.target.value) }></textarea>
                <br/>
                <button onClick={ submit }>submit</button>
            </div>
        </>
    );
}

export default Page1;