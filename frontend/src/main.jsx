/* ...existing code... */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './auth/login.jsx'
import Dashborad from './userdashborad/Dashborad.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<App />} />
        <Route path='/Dashboard' element={<Dashborad/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

