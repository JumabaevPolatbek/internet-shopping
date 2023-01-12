import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Dashboard from './components/Dashboard';
import  Orders  from './components/Orders';
import Users from './components/Users';
import NewProduct from './components/NewProduct';
import NewCategory from './components/NewCategory';
import NewCountrie from './components/NewCountrie';
import NewUser from './components/NewUser';
function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Auth/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route path='admin' element={<Admin/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='newproduct' element={<NewProduct/>}/>
          <Route path='newcategory' element={<NewCategory/>}/>
          <Route path='newcountrie' element={<NewCountrie/>}/>
          <Route path='newuser' element={<NewUser/>}/>
        </Route>
    </Routes>
  );
}

export default App