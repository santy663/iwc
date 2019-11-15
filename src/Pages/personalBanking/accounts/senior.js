import React from 'react';

const Paccountssenior = (props) => {
    const formFields =["NAME","DOB","PHONE","PAN","NOMINEE"]
    return (
        <div>
                <h1>Please fill in the form to create your Senior Account</h1>    
                    <form className="seniorForm">
                    { formFields.map((item)=>(
                    <label>
                        {item}:
                        <input type ="text" id={item}></input>
                    </label>
                    ))}
                    <input type='submit' value='Submit' id="seniorsubmit" className="seniorsubmit" />                 
                </form>
  
                
        </div>
    )
}
export default Paccountssenior