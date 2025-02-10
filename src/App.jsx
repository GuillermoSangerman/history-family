import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import HistoryInfo from './pages/HistoryInfo'

export default function App() {
  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/family' Component={HistoryInfo}/>
    </Routes>
  )
}

