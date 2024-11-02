// src/router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Popular from './components/Popular';
import Search from './components/Search';
import Wishlist from './components/Wishlist';
import Profile from './components/Profile';
import Signin from './components/Auth/Signin';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/search" element={<Search />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default AppRoutes;
