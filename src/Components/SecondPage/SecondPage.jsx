import React from 'react';
import dialog from '../Assets/dialog.png'
import wall from '../Assets/Wall.png'
import '../SecondPage/SecondPage.css'
import next_btn from '../Assets/next.png'
import previous from '../Assets/previous.png'
import {useNavigate} from 'react-router-dom'


const SecondPage = () => {
    const navigate = useNavigate();
  return (
    <div className='StartPage'>
      <div className="wall">
      <img src={wall} alt="" />
      </div>
      <div className="dialog">
        <img src={dialog} alt="" />
        <p>Hi , I am Mizo ! <br/>and I love bananas </p>
      </div>
      <div className="btn">
        <img src={next_btn} alt="" onClick={()=>{navigate('/Screen3')}}/>
      </div>
      <div className="prev">
        <img src={previous} alt="" onClick={()=>{navigate('/')}} />
      </div>
    </div>
  )
}

export default SecondPage
