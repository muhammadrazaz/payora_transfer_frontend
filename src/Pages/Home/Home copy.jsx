import React from 'react'
import { useAuth } from '../../Provider/AuthProvider'
export default function Home() {
  const {setToken,setUserDetail} = useAuth()
  const logout = (e)=>{
    setToken()
    setUserDetail()
  }
  return (
    <div>
    <button onClick={logout}>Logout</button>
    </div>
  )
}