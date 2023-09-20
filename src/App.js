import './App.scss';

import Home from './Pages/Home';
import About from './Pages/About';

import {  Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <> 
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
