import {FaUser,FaLock} from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const handlersubmit = (event) => 
  {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(username)) {
      alert("E-mail inválido!");
      return;
    }
    
    console.log(username+" - "+password);
   
    
  }

  return (
    <div className="container">
        <form onSubmit={handlersubmit}>
          
            <h1>Acesso ao Sistema</h1>
            <div className="input-field">
            <input  type="email" placeholder='Digite seu E-Mail' value={username}
            onChange={(e)=>setusername(e.target.value)}
            />         
            <FaUser className="icon"/>   
            </div>
            <div className="input-field">
            <input  type="password" placeholder='Digite sua senha' value={password}
            onChange={(e)=>setpassword(e.target.value)} />
            <FaLock className="icon"/> 
            </div>
            <div className="recall-forget">
              <label >
                <input type="checkbox" />
                lembre de min
              </label>
              <a href="#">Esqueceu a senha?</a>
            </div>                   
            <button> Entrar</button>
            <div className="singnup-link">
              <p>Não tem uma conta? <a href="#"> Registrar</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login