import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.scss'
import Page1 from './page/Page1'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App">index</div>} />
        <Route path="page1" element={<Page1 />} />
      </Routes>
    </Router>
  )
}

export default App
