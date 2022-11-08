import "./App.css";
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import FavoritePage from "./pages/FavoritesPage/FavoritePage";
import CartPage from "./pages/CartPage/CartPage";
import UserPage from "./pages/UserPage/UserPage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className='App'>
      <Header
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <main
        className='app-main'
        onClick={() => setOpenDropdown(false)}>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/favorite'
            element={<FavoritePage />}
          />
          <Route
            path='/cart'
            element={<CartPage />}
          />
          <Route
            path='/user'
            element={<UserPage />}
          />
          <Route
            path='/search/:type/:entry'
            element={<SearchPage />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
