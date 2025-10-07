/* ...existing code... */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './login.jsx'
import Test from './test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<App />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

