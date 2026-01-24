import React from 'react'
import { useState } from 'react'
import Search from './components/Search'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const App=() => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main>
            <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src="./hero-img.png" alt="Hero Banner" />
                    <h1>Search your favorite movie</h1>
                </header>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>   
            
        </main>
  )
}

export default App
