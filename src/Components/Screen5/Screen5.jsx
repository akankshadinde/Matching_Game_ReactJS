import React from 'react'
import wall from '../Assets/Wallpaper.png'
import '../Screen5/Screen5.css'
import previous from '../Assets/previous.png'
import {useNavigate} from 'react-router-dom'
import play_btn from '../Assets/play.png'
import bar from '../Assets/bar.png'
import black_banana from '../Assets/black_banana.png'
import rect from '../Assets/rect.png'
import pink from '../Assets/heart_card.png'
import apple_card from '../Assets/apple_card.png'
import blue_card from '../Assets/blue_card.png'


const Screen5 = () => {
    const navigate = useNavigate();
  return (
    <div className='Screen5'>
    <div className="wall">
    <img src={wall} alt="" />
    </div>
    <div className="btn">
      <img src={play_btn} alt="" onClick={()=>{navigate('/')}}/>
    </div>
    <div className="cards">
        <img src={rect} alt="" />
        <img id='pink' src={pink} alt="" />
        <img id='apple' src={apple_card} alt="" />
        <p id='para'>Select a pink card.</p>
        <p id='para1'>It has images.</p>
    </div>
    <div className="cards1">
        <img src={rect} alt="" />
        <img id='blue' src={blue_card} alt="" />
        <p id='para'>Select a blue card.</p>
        <p id='para1'>It has alphabates.</p>
    </div>
    <div className="cards2">
        <img src={rect} alt="" />
        <img id='pink' src={pink} alt="" />
        <img id='blue' src={blue_card} alt="" />
        <p id='para'>Select a pink card.</p>
        <p id='para1'>It has images.</p>
    </div>
    <div className="prev">
      <img src={previous} alt="" onClick={()=>{navigate('/Screen3')}} />
    </div>
    <div className="bar">
      <img src={bar} alt="" />
    </div>
    <div className="banana">
    <img src={black_banana} alt="" />
    </div>
  </div>
  )
}

export default Screen5
