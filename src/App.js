import './App.css';
import { Routes,Route } from 'react-router-dom';
import StartPage from './Components/Startpage/StartPage';
import SecondPage from './Components/SecondPage/SecondPage';
import Screen3 from './Components/Screen3/Screen3';
import Screen4 from './Components/Screen4/Screen4';
import Screen5 from './Components/Screen5/Screen5';
import Screen6 from './Components/Screen6/Screen6';
import Screen7 from './Components/Screen7/Screen7';
import Screen8 from './Components/Screen8/Screen8';
import Screen9 from './Components/Screen9/Screen9';

function App() {
  return (
    <div>
       <Routes>
         <Route path='/' element={<StartPage/>}/>
         <Route path='/second' element={<SecondPage/>}/>
         <Route path='/Screen3' element={<Screen3/>}/>
         <Route path='/Screen4' element={<Screen4/>}/>
         <Route path='/Screen5' element={<Screen5/>}/>
         <Route path='/Screen6' element={<Screen6/>}/>
         <Route path='/Screen7' element={<Screen7/>}/>
         <Route path='/Screen8' element={<Screen8/>}/>
         <Route path='/Screen9' element={<Screen9/>}/>
       </Routes>
    </div>
  );
}

export default App;
