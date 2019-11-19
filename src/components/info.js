import React,{Component} from 'react'
class Infocomp extends Component {
    state ={
        0:false,
        1:false,
        2:false,
        3:false,
        4:false,
        5:false
    }
  Show = (idx) =>{
        this.setState({idx:true})
        setTimeout(function(){
            this.setState({idx:false})
        },3000)
  }
  render () {  
      return (
        <div>
            <img src="https://img.icons8.com/android/24/000000/info.png" alt="i" onClick={this.Show.bind(this,this.props.index)}></img>
            {
                this.state[0]                ?
                <div>hello</div>
                : null
        }
        </div>
    )
  }
}

export default Infocomp