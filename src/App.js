import React, {useState} from "react";
import './App.css';

//Importar componentes 
import Login from './components/Login/Login'

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if(username === "Admin" && password === "123"){
      setIsLoggedIn(true);
    } else{
      alert("Usuario ou senha invalidos!!!")
    }
  }

  if (!isLoggedIn){
    return <Login onLogin = {handleLogin}/>
  }
} export default App;