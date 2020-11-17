import React from 'react';
import { useSelector } from 'react-redux'
import { msgObjType } from '../../types';

function Page2() {
    const msgs = useSelector((state: any) => state.msgReducer.msgs)

    return (
        <>
            {msgs.length && msgs.map((v: msgObjType) => {
                return (
                    <>
                        name: <strong>{ v.name }</strong>
                        <br/>
                        email: <strong>{ v.email }</strong>
                        <br/>
                        msg: <strong>{ v.msg }</strong>
                        <hr/>
                    </>
                );
            })}
            <br/>
        </>
    );
}

export default Page2;