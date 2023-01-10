import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Auth/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
    </Routes>
  );
}

export default App