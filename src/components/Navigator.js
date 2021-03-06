import React,{Component} from 'react';
import Aux from '../HOC/auxilary';
import {ReactComponent as Logo} from '../Assets/Logo.svg';
import {Link} from 'react-router-dom';
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
        <Link to="/">
        <Logo className='Logo' />
        </Link>
        <button className='tabLinks' id="personalBanking"onClick={()=>this.setState({personal : !this.state.personal})}>Products</button>
        { this.state.personal ? 
                        <NavDropdown className = 'dropdown-personal' 
                        subpath='personal'
                        items = {this.state.personalBanking} 
                        Outside = {()=>this.setState({personal : !this.state.personal})}>
                        </NavDropdown>
                        : null
        }
        <button className='tabLinks' >Ways to Bank</button>
    </Aux>)
    }
}
 

export default Navigator