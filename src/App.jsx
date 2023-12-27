import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AddWatchList from './components/AddWatchList'

const App =() => {
  return (
    <>
      <Navbar />
      <AddWatchList />
    </>
  )
}

export default App
