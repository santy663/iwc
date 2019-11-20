import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import Accounts from '../../../Assets/images/accountsPage.jpg'
import './accounts.css'
const Paccountsdetails = (props) => {
    return (
        <div className="AccountsContainer">
            <img src ={Accounts} alt ="Account" className="AccountImage"/>
            <ul className="listofAccounts">
                <li className="Accounts">Savings</li>
                <li className="Accounts" key = "1Accountpersonal" ><Link to={"/personal/Accounts/senior"} id="senior">Senior</Link></li>   
                <li className="Accounts">Student</li>
                             
            </ul>           
        </div>
    )
}

export default withRouter(Paccountsdetails)