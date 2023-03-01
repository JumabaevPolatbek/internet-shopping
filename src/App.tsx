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
import  { DetailProducts} from './pages/Product/';
//users
import {Users} from './pages/Users';
//category
import  {DetailCategory}  from './pages/Category';
//country
import { Country } from './pages/Country';
//cabinet
import { RequireAdmin } from './utils/requireAdmin';
import { LayoutPerson } from './pages/Cabinet/LayoutCabinet';
import { PersonalData } from './pages/Cabinet/PersonalData';
import { RequireAuth } from './utils/requireAuth';

import {CheckAuth} from "./utils/checkAuth";
import {ProductInfo} from "./pages/Home/Product/ProductInfo";
import {Carts} from "./pages/Carts";
import {Favorites} from "./pages/Favorites/Favorites";


function App() {

  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/product/:name' element={<ProductInfo/>}/>
            <Route path='/carts' element={<Carts/>}/>
        <Route path='/cabinet' element={
          <RequireAuth>
            <LayoutPerson />
          </RequireAuth>
        }>
          <Route index element={ <PersonalData/>} />
        </Route>
                <Route path='/login' element={<CheckAuth>
                    <Auth/>
                </CheckAuth>} />
            <Route path='/favorites' element={<Favorites/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    <Route path='admin' element={
      <RequireAuth>
        <RequireAdmin>
          <Admin />
          </RequireAdmin>
      </RequireAuth>
  }>
          <Route index element={<Dashboard/>}/>
          <Route path='users' element={<Users />}/>
          <Route path='category' element={<DetailCategory/>}/>
          <Route path='products' element={<DetailProducts/>}/>
          <Route path='country' element={<Country/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='*' element={<NotFound />} />
    </Route>
    </Routes>
  );
}

export default App