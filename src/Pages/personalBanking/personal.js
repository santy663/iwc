import React from 'react';
import './personal.css';
import {withRouter} from 'react-router-dom'
const Paccounts =(props) => {
    
    return (
    <div className='page'>
        <div className ='tab'>
            <button className='tabLinks'>Accounts</button>
            <button className='tabLinks'>Deposits</button>
        </div>
    </div> )
}
export default withRouter(Paccounts)