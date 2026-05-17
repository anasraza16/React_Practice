import React from 'react'
import './index.css'
import Home from './components/UI/Home'
// import ReactDOM from 'react-dom/client'
// import App from './Ap'


const App = () => {

  let userName = "raza"

  return (
    <>

      <Home name={userName}/>
    </>
  )
}

export default App
