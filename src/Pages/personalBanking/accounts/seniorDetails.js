import React from 'react'
import {feature,fees} from './variab.js'
import Senior from '../../../Assets/images/senior.jpg'
import './details.css'
const SeniorDetails = (props) => (
    
    <div className="detailsSenior">
        <img src ={Senior} alt="senior account"></img>
        <h1>Senior Saving Account</h1>
        <h3> Benifits</h3>
        <div className="features" id="feature">
            {feature.map((item,idx)=>(
                <p className="contents" key={idx}>{idx+1}.  {item}</p>
            ))}
        </div>
        
        <div className="fees" id ="fees">
            <h3> Service charges and Fees</h3>
            {feature.map((item)=>(
                    <p className="contents"> {item}</p>
                ))}    
        </div>
    </div>
)
export default SeniorDetails