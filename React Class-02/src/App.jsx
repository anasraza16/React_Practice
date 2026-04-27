import React from 'react';
import './App.css';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Hello</h1>
//     </>
//   )
// }

// export default App


// const Frag = () => {
//   const element = <h1>hello Saar!</h1>
//   return (
//     <>
//       <div>{element}</div>
//     </>

//   )
// };
// export default Frag;


// export const App = () => {
//   return (
//     <h1 className="bg-amber-400">Hello Saylani</h1>

//   )
// };
// import {App} from './App.jsx'



// export default App;
// import App from './App.jsx'

// export {App}

// ________________________________________


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Hello</h1>
//     </>
//   )
// }

// export default App


// const App = () => {
//   const element = React.createElement('h1', null, 'Hello') ;
//   return {

//   }
// }

import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Home />
      <div>
        <h1>the world</h1>
        <p>paragraph</p>
        <img src="https://images.unsplash.com/photo-1777209307688-c6edf4f959d4?q=80&w=889&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
      </div>
    </>
  );
};

export default App;