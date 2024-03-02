import './App.css';
import { Routes,Route } from 'react-router-dom';
import StartPage from './Components/Startpage/StartPage';
import SecondPage from './Components/SecondPage/SecondPage';
import Screen3 from './Components/Screen3/Screen3';
import Screen4 from './Components/Screen4/Screen4';
import Screen5 from './Components/Screen5/Screen5';

function App() {
  return (
    <div>
       <Routes>
         <Route path='/' element={<StartPage/>}/>
         <Route path='/second' element={<SecondPage/>}/>
         <Route path='/Screen3' element={<Screen3/>}/>
         <Route path='/Screen4' element={<Screen4/>}/>
         <Route path='/Screen5' element={<Screen5/>}/>
       </Routes>
    </div>
  );
}

export default App;
