import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { msgObjType } from '../../types';
import { fillMsgsThunk } from '../../redux/msgReducer';
import { appStateType } from '../../redux/store';

function Page4(props: any) {
    console.log(props);
    useEffect(() => {
        if(!props.msgs.length) {
            props.fillMsgsThunk();
        }
    }, []);

    useEffect(() => {
        console.log(props.msgs)
    }, [props.msgs]);
      
    return (
        <>
            { props.msgs.map((v: msgObjType) => {
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
            }) }
        </>
    );
}

const mapStateToProps = (state: appStateType) => {
    return {
        msgs: state.msgReducer.msgs,
    }
}

export default connect(mapStateToProps, { fillMsgsThunk })(Page4);