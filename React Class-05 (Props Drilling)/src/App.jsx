// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

import NavBar from "./components/NavBar"
import CompoD from "./components/Component-D"

const App = () => {

  let userName = "Raza"

  return (
    <>
      <NavBar />
      <div className="px-3">
        <CompoD name={userName}/>
      </div>
    </>
  )
}

export default App
