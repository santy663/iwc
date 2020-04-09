import React from 'react';
import './personal.css';
import {withRouter, Link, Route} from 'react-router-dom'
import Paccountscreation from './accounts/accounts'
import Paccountssenior from './accounts/senior'
import Paccountsdetails from './accounts/details'
const Paccounts =(props) => {
    console.log(props)
    return (
    <div className='page'>
        <div className ='tab'>
            <li className="tabLinks" key = "1Accountpersonal" ><Link to={"/personal/Accounts/pad"} id="pad">Accounts</Link></li>            
            <li className="tabLinks" key = "1AccountDeposit" ><Link to={"/personal/Accounts/details"} id="accdetails">Details</Link></li>     
            {/* <Paccountscreation /> */}
        </div>
        <Route exact path="/personal/Accounts/" component={Paccountscreation} />
        <Route path="/personal/Accounts/details" component={Paccountsdetails} />
        <Route path="/personal/Accounts/senior" 
        render={(props1) => <Paccountssenior {...props1} restore={props.restore} />} />
    </div> )
}
export default withRouter(Paccounts)