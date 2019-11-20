import React,{Component} from 'react';
import CustomButton from '../../../components/customButton'
import details from './variab'
import Info from '../../../components/info'
import {withRouter} from 'react-router-dom'
class Paccountssenior extends Component {
    state ={
        formFields :["NAME","DOB","PHONE","PAN","NOMINEE"],
        showForm : false
    }
    showFormscreen = () =>{
        this.setState({showForm:!this.state.showForm})
        console.log(this.state)
    }
    showDetails = () =>{
        this.props.history.replace("/personal/Accounts/details/senior")
    }
    submit =() => {
        alert("Request submitted successfully")
    }

    render () {
        return (
            <div className="seniorAccountCreation"> 
                <h1>Senior Account</h1>
                <h3>A convenient, safe and rewarding experience</h3>
                <p>
                To enrich your life after retirement, our Senior’s Club Savings Account offers you more returns on savings, more banking convenience and more benefits.
                </p>
                <div className = "buttons">
                <CustomButton click ={this.showFormscreen.bind(this)} id="apply">Apply</CustomButton>
                <CustomButton click ={this.showDetails.bind(this)} id="details">Know More</CustomButton>
                </div>
                {this.state.showForm ?
                <div className="accCreation">
                        <h1>Please fill in the form to create your Senior Account</h1>    
                            <form className="seniorForm">
                            {this.state.formFields.map((item,idx)=>(
                            <label>
                                {/* {item} <Info index ={idx} /> : */}
                                {item} :
                                <input type ="text" id={item}></input>
                            </label>
                            ))}
                            <CustomButton click={this.submit}>Submit</CustomButton>         
                        </form> 
                        
                </div>
                :
                null}
            </div>
        )
    }
}
export default withRouter(Paccountssenior)