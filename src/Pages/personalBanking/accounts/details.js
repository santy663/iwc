import React from 'react';
import {withRouter, Link,Route} from 'react-router-dom';
import SeniorDetails from './seniorDetails'
import './accounts.css'
const Paccountsdetails = (props) => {
    return (
        <div>
            <Route path="/personal/Accounts/details/senior" component={SeniorDetails}></Route>       
        </div>
    )
}

export default withRouter(Paccountsdetails)