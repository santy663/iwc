import React from 'react'
import {feature,fees} from './variab.js'
import './details.css'
const SeniorDetails = (props) => (
    <div className="detailsSenior">
        Details of senior Acc
        <div className="features" id="feature">
            <table>
            <tr className="tag"> 
                <td id="benifits">Benifits  </td>
                <td className="content">
                    {feature.map((item,idx)=>(
                        <div className="contents" key={idx}>{item}</div>
                    ))}
                </td>
            </tr>
            </table>
        </div>

    </div>
)
export default SeniorDetails