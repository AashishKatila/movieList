import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AddWatchList from './components/AddWatchList'
import { GlobalProvider } from './context/GlobalState'

const App =() => {
  return (
    <>
    <GlobalProvider>
      <Navbar />
      <AddWatchList />
    </GlobalProvider>
    </>
  )
}

export default App
