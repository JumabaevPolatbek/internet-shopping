import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
//admin
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
//orders
import  Orders  from './pages/Orders';
//products
import  {NewAddProduct, PageProduct, DetailProducts, EditProduct} from './pages/Product/';
//users
import {Users,NewUser,EditUser,User} from './pages/Users';
//category
import  {CategorieLayout,DetailCategory,NewCategory}  from './pages/Category';
import { EditCategory } from './pages/Category/Edit/EditCategories';
//country
import { CountryLayout, DetailCountry, NewCountrie } from './pages/Country';
import { RequireAdmin } from './utils/requireAdmin';
//cabinet
import { LayoutPerson } from './pages/Cabinet/LayoutCabinet';
import { PersonalData } from './pages/Cabinet/PersonalData';


function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/cabinet' element={<LayoutPerson/>}>
          <Route index element={ <PersonalData/>} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
      <Route path='admin' element={
        <RequireAdmin>
          <Admin />
        </RequireAdmin>
      }>
          <Route index element={<Dashboard/>}/>
        <Route path='users' element={<User />}>
            <Route index element={<Users/>}/>
            <Route path='edit/:id' element={<EditUser/>}/>
            <Route path='add' element={<NewUser />} />
          </Route>
          <Route path='category' element={<CategorieLayout/>}>
            <Route index element={<DetailCategory/>}/>
            <Route path='add' element={<NewCategory/>}/>
            <Route path='edit/:id'element={<EditCategory/>}/>
          </Route>
          <Route path='products' element={<PageProduct/>}>
            <Route index element={<DetailProducts/>}/>
            <Route path='add' element={<NewAddProduct/>}/>
            <Route path='edit/:id' element={<EditProduct/>}/>
        </Route>
        <Route path='country' element={<CountryLayout/>}>
          <Route index element={<DetailCountry />} />
          <Route path='add' element={<NewCountrie />} />
          <Route path='edit/:id' element={<NewCountrie />} />
        </Route>
          <Route path='orders' element={<Orders/>}/>
          <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App