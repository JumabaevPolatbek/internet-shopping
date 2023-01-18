import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import  Orders  from './pages/Orders';
import NewAddProduct from './pages/NewProduct';
import NewCategory from './pages/NewCategory';
import NewCountrie from './pages/NewCountrie';
import NewUser from './pages/NewUser';
import Users from './pages/Users';
import { User } from './pages/Users/User';
function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Auth/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
      <Route path='admin' element={<Admin />}>
          <Route index element={<Dashboard/>}/>
        <Route path='users' element={<User />}>
            <Route index element={<Users/>}/>
            <Route path='edit/:id' element={<NewUser/>}/>
            <Route path='add' element={<NewUser />} />
          </Route>
          <Route path='orders' element={<Orders/>}/>
          <Route path='newproduct' element={<NewAddProduct/>}/>
          <Route path='newcategory' element={<NewCategory/>}/>
          <Route path='newcountrie' element={<NewCountrie/>}/>
          <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App