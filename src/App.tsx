import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import  Orders  from './pages/Orders';
import NewAddProduct from './pages/Product';
import NewUser from './pages/Users/NewUser';
import Users from './pages/Users';
import { User } from './pages/Users/User';
import EditUser from './pages/Users/Edituser';
import  {CategorieLayout,DetailCategory,NewCategory}  from './pages/Categorie/';
import PageProduct from './pages/Product';
import { DetailProducts } from './pages/Product/DetailProducts';
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
            <Route path='edit/:id' element={<EditUser/>}/>
            <Route path='add' element={<NewUser />} />
          </Route>
          <Route path='category' element={<CategorieLayout/>}>
            <Route index element={<DetailCategory/>}/>
            <Route path='add' element={<NewCategory/>}/>
          </Route>
          <Route path='products' element={<PageProduct/>}>
            <Route index element={<DetailProducts/>}/>
            <Route path='add' element={<NewAddProduct/>}/>
            <Route path='edit/:id' element={<p>Edit</p>}/>
          </Route>
          {/* // <Route path='orders' element={<Orders/>}/>
          // <Route path='newproduct' element={<NewAddProduct/>}/>
          // <Route path='newcategory' element={<NewCategory/>}/>
          // <Route path='newcountrie' element={<NewCountrie/>}/>
          <Route path='*' element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App