import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'

function App() {

const entryElements = data.map((entry)=>{
    return(
      <Entry
      img={entry.img}
      alt ={entry.alt}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}

      />
    )
})

  return (
    <div>
      <Header/>
      <main className="container">
        {entryElements}
      </main>
    </div>
  )
}

export default App
