import React from 'react';
import {withRouter, Link,Route} from 'react-router-dom';
import SeniorDetails from './seniorDetails'
import './accounts.css'
const Paccountsdetails = (props) => {
    return (
        <div>
            <ul className="listofAccounts">
                <li className="Accounts">Savings</li>
                <li className="Accounts">Student</li>
                <li className="Accounts" key = "1Accountpersonal" ><Link to={"/personal/Accounts/details/senior"} id="senior">Senior</Link></li>                
            </ul>    
            <Route path="/personal/Accounts/details/senior" component={SeniorDetails}></Route>       
        </div>
    )
}

export default withRouter(Paccountsdetails)