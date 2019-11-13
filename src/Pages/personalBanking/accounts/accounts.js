import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import './accounts.css'
const Paccountsdetails = (props) => {
    return (
        <div>
            <ul className="listofAccounts">
                <li className="Accounts">Savings</li>
                <li className="Accounts">Student</li>
                <li className="Accounts" key = "1Accountpersonal" ><Link to={"/personal/Accounts/senior"} id="senior">Senior</Link></li>                
            </ul>           
        </div>
    )
}

export default withRouter(Paccountsdetails)