import "./App.css"
import "./index.css"
import Login from './components/auth/login';
import { useEffect, useState } from "react";
import Welcomepage from "./components/welcomepage";
function App() {
  const [token, setToken]=useState("")
  useEffect(()=>{
    const hash=window.location.hash;
    const _token=hash.split("&")[0].split("=")[1]
    window.localStorage.setItem("token",_token);
    setToken(_token)

  },[])
  return (
    !token?
    <Login/>:
    <Welcomepage/>
   
  
 
  )
     
   
}

export default App;
