import React from 'react';
import {withRouter, Link} from 'react-router-dom'
const Paccountsdetails = (props) => {
    return (
        <div>
            <ul>
                <li>Savings</li>
                <li>Student</li>
                <li key = "1Accountpersonal" ><Link to={"/personal/Accounts/senior"} id="senior">Senior</Link></li>                
            </ul>
           
        </div>
    )
}

export default withRouter(Paccountsdetails)