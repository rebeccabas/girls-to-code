import React from "react"
import './App.css'
import Header from './pages/Header'
import Sidenav from './pages/Sidenav'
import Footer from './pages/Footer'

function App(){

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header title= "Header"/>
        <Sidenav title="Sidenav"/>
        <Footer title="Footer"/>
      </div>
    </>
  )
}

export default App
