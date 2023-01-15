import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import  Orders  from './pages/Orders';
// import Users from './pages/Users';
import NewAddProduct from './pages/NewProduct';
import NewCategory from './pages/NewCategory';
import NewCountrie from './pages/NewCountrie';
import NewUser from './pages/NewUser';
import { AdminPage } from './pages/Admin/AdminPage';
function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Auth/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Route>
      <Route path='admin' element={<Admin />}>
          <Route index element={<AdminPage/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='users' element={<NewUser/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='newproduct' element={<NewAddProduct/>}/>
          <Route path='newcategory' element={<NewCategory/>}/>
          <Route path='newcountrie' element={<NewCountrie/>}/>
          <Route path='newuser' element={<NewUser/>}/>
        </Route>
    </Routes>
  );
}

export default App