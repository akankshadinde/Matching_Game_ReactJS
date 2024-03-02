import React from 'react'
// import wallpaper from '../Assets/Wallpaper.png'
import dialog from '../Assets/dialog.png'
import wall from '../Assets/Wall.png'
import '../Startpage/StartPage.css'
import start_btn from '../Assets/button.png'
import {useNavigate} from 'react-router-dom'



const StartPage = () => {
  const navigate = useNavigate();
    return (
    <div className='StartPage'>
      <div className="wall">
      <img src={wall} alt="" />
      </div>
      <div className="dialog">
        <img src={dialog} alt="" />
        <p>Welcome Kiddo!</p>
      </div>
      <div className="btn">
        <img src={start_btn} alt="" onClick={()=>{navigate('/second')}}/>
      </div>
    </div>
  )
}

export default StartPage
