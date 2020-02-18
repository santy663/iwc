import React,{Component} from 'react';
import CustomButton from '../../../components/customButton';
import {withRouter} from 'react-router-dom';
import Portfolio from '../../portfolio/portfolio';
class Paccountssenior extends Component {
    state ={
        formFields :["NAME","DOB","PHONE","PAN","NOMINEE","Age","Occupation","Annual income","Tax payable per year","Nominee"],
        showForm : false,
        showMf : false,
        selectedOption: "no"
    }
    showFormscreen = () =>{
        this.setState({showForm:true})
    }
    showDetails = () =>{
        this.props.history.replace("/personal/Accounts/details/senior")
    }
    showMf = () => {
        this.setState({showMf:true})
    }
    hideMf = () =>{
        this.setState({showMf:false})
    }
    submit =() => {
        alert("Request submitted successfully")
    }
    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
          });
        if (changeEvent.target.value=="yes") {
            this.showMf();
        } else {
            this.hideMf();
        }
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
                                <label className="seniorFields">
                                    {/* {item} <Info index ={idx} /> : */}
                                <p className="seniorLabel"> {item} :</p>
                                    <input className="seniorInput" type ="text" id={item}></input>
                                </label>
                            ))}
                                <label> Invest in Mutual funds</label>
                                <div className="radio">                            
                                    <label id="mfyes">
                                        <input type="radio" value="yes"  checked={this.state.selectedOption === 'yes' } onChange={this.handleOptionChange}/>
                                            Yes
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="no" checked={this.state.selectedOption === 'no'} onChange={this.handleOptionChange}/>
                                            No
                                        </label>
                                </div>
                                {this.state.showMf ?                        
                                    <div>
                                        <Portfolio seniorState={this.state}></Portfolio>
                                    </div>
                                    : null
                                }
                                {!this.state.showMf ?
                                <CustomButton className = "submit" click={this.submit}>Submit</CustomButton> :
                                null}
                                        
                        </form>                         
                </div>
                :
                null
                }
            </div>
        )
    }
}
export default withRouter(Paccountssenior)