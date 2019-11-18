import React from 'react';
import HomeImage from '../Assets/images/home.jpg'
import Signin from '../components/login'
import './home.css'

const Home = (props) => (
    <div className='home'> 
       <img src ={HomeImage} alt ="HOME" />
       <Signin />
    </div>
)

export default Home