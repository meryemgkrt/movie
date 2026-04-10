import React from 'react'
import './App.css'
import Header from './components/Header'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import WatchList from './components/WatchList'
import Watched from './components/Watched'
import "./lib/fontawsome/css/all.min.css"
import Add from './components/Add'
import { GlobalProvider } from './context/GlobalState'
const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<WatchList/>} />
          <Route path='/watched' element={<Watched/>} />
        <Route path='/add' element={<Add/>} />
      </Routes>
    </Router>
    </GlobalProvider>
  )
}

export default App