import React from 'react'
import dialog from '../Assets/dialog.png'
import wall from '../Assets/Wall.png'
import '../Screen3/Screen3.css'
import previous from '../Assets/previous.png'
import {useNavigate} from 'react-router-dom'
import yes_btn from '../Assets/yes.png'

const Screen3 = () => {
    const navigate = useNavigate();
  return (
    <div className='Screen3'>
      <div className="wall">
      <img src={wall} alt="" />
      </div>
      <div className="dialog">
        <img src={dialog} alt="" />
        <p>Can you help me get some ?  </p>
      </div>
      <div className="btn">
        <img src={yes_btn} alt="" onClick={()=>{navigate('/Screen4')}}/>
      </div>
      <div className="prev">
        <img src={previous} alt="" onClick={()=>{navigate('/second')}} />
      </div>
    </div>
  )
}

export default Screen3
