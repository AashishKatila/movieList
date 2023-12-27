import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AddHoldList from './components/AddHoldList'
import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import HoldList from './components/HoldList'
import Watched from './components/Watched'

const App =() => {
  return (
    <>
    <GlobalProvider>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HoldList />} />
        <Route exact path="/add" element={<AddHoldList />} />
        <Route exact path="/watched" element={<Watched />} />
      </Routes>
      </BrowserRouter>
      {/* <AddHoldList /> */}
    </GlobalProvider>
    </>
  )
}

export default App
