import React,{Component} from 'react';
import Aux from '../HOC/auxilary';
import {ReactComponent as Logo} from '../Assets/Logo.svg';
import NavDropdown from './NavDropdown';
import './Navigator.css';

class Navigator extends Component {
    state = {
        personalBanking: ['cards','Accounts'],
        corporateBanking: ['cards','Accounts'],
        personal : false,
        corporate : false,
    }
    render(){
    return (<Aux ClassName ='tab'>
        <Logo className='Logo'/>
        <button className='tabLinks' id="personalBanking"onClick={()=>this.setState({personal : !this.state.personal})}>Personal Banking</button>
        { this.state.personal ? 
                        <NavDropdown className = 'dropdown-personal' 
                        subpath='personal'
                        items = {this.state.personalBanking} 
                        Outside = {()=>this.setState({personal : !this.state.personal})}>
                        </NavDropdown>
                        : null
        }
        <button className='tabLinks' onClick={()=>this.setState({corporate : !this.state.corporate})}>Corporate Banking</button>
        { this.state.corporate    ?
                        <NavDropdown className = 'dropdown-corporate'
                        subpath='corporate' 
                        items = {this.state.corporateBanking} 
                        Outside = {()=>this.setState({corporate : !this.state.corporate})}> 
                        </NavDropdown>
                        :   null

        }
    </Aux>)
    }
}
 

export default Navigator