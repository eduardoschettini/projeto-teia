import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import Home from './pages/Home'
import Album from './pages/Album'
import Objeto from './pages/Objeto'
import Pesquisa from './pages/Pesquisa'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='album/:albumId' element={<Album />} />
          <Route path='objeto/:id' element={<Objeto />} />
          <Route path='pesquisa' element={<Pesquisa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
