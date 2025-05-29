import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import { signInAPI } from './actions'
import Dashboard from "./components/Dashboard"
import { useEffect, useState } from 'react'
import { getUserAuth } from './actions'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  const loginValidation = async ()=>{
    // dispatch(signInAPI());
    const cleanUser = await dispatch(signInAPI());
    setUser(cleanUser)
  }
  useEffect(() => {
    dispatch(getUserAuth());
  },[dispatch]);
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
