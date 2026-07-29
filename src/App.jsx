import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Acceuil from './pages/acceuil'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acceuil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
