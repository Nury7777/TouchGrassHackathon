import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import CreateTimestamp from './components/CreateTimestamp';



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<CreateTimestamp />} />
      </Routes>
      {/* <h1>Helllo!!!</h1> */}
    </div>
    
  )
}

export default App;