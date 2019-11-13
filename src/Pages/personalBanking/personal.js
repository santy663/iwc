import React from 'react';
import './personal.css';
import {withRouter, Link, Route} from 'react-router-dom'
import Paccountsdetails from './accounts/accounts'
import Paccountssenior from './accounts/senior'
const Paccounts =(props) => {
    console.log(props)
    return (
    <div className='page'>
        <div className ='tab'>
            <li className="tabLinks" key = "1Accountpersonal" ><Link to={"/personal/Accounts/pad"} id="pad">Accounts</Link></li>            
            <li className="tabLinks" key = "1AccountDeposit" >Deposits</li>     
            
        </div>
        <Route path="/personal/Accounts/pad" component={Paccountsdetails} />
        <Route path="/personal/Accounts/senior" component={Paccountssenior} />
    </div> )
}
export default withRouter(Paccounts)