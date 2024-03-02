import React from 'react'
import dialog from '../Assets/dialog.png'
import wall from '../Assets/Wall.png'
import '../Screen4/Screen4.css'
import previous from '../Assets/previous.png'
import {useNavigate} from 'react-router-dom'
import yes_btn from '../Assets/yes.png'
import bar from '../Assets/bar.png'
import black_banana from '../Assets/black_banana.png'


const Screen4 = () => {
    const navigate = useNavigate();
  return (
    <div className='Screen4'>
      <div className="wall">
      <img src={wall} alt="" />
      </div>
      <div className="dialog">
        <img src={dialog} alt="" />
        <p>Can you help me get some ? </p>
      </div>
      <div className="btn">
        <img src={yes_btn} alt="" onClick={()=>{navigate('/Screen5')}}/>
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

export default Screen4
