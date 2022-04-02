import React from 'react'
import './App.css'
import { Navbar,Hero,Trending,Nearby,Topin,Featured,Degree } from './components/import'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Trending/>
      <Nearby/>
      <div className="fd">
      <Featured/>
      <Degree/>
      </div>
      <Topin/>
      <Topin/>
    </div>
  )
}

export default App