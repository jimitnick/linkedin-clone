import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import { signInAPI } from './actions'
import Dashboard from "./components/Dashboard"
import { useEffect } from 'react'
import { getUserAuth } from './actions'

function App(props) {
  const loginValidation = ()=>{
    signInAPI();
  }
  useEffect(() => {
    getUserAuth();
  });
  return (
    <>
      <div className='min-w-screen min-h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Login signIn = {loginValidation}/>} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
        {/* <Dashboard /> */}
      </div>
    </>
  )
}

export default App
