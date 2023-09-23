import './App.scss';

import Home from './Pages/Home';
import About from './Pages/About';
import FullPost from './Pages/FullPost';
import Login from './Pages/Login/LoginPage';

import {  Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <> 
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<FullPost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
