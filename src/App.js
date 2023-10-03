import './App.scss';

import { useSelector, useDispatch } from 'react-redux';
import { feathInfoMe, selectorIsAuth } from './redux/slices/auth';
import { useEffect } from 'react';

import Home from './Pages/Home';
import About from './Pages/About';
import FullPost from './Pages/FullPost';
import Login from './Pages/Login/LoginPage';
import Register from './Pages/Register/Register';
import CreatePost from './Pages/CreatePost/CreatePost';

import { Aside } from './components/Aside/Aside';

import {  Routes, Route } from 'react-router-dom'; 

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectorIsAuth);

  useEffect(() =>{
      dispatch(feathInfoMe());
  }, []);

  return (
    <> 
      <div className='container'>
        <Aside />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<FullPost />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createPost' element={<CreatePost />} />
          <Route path='/about' element={<About />} />
        </Routes>
        {/* <RightAside /> */}
      </div>

    </>
  );
}

export default App;
