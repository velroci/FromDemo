import { useState } from "react";


export default function SignUpFormm() {
   const [username, setUsername]=useState("");
   const [password, setPassword]=useState("");
   const [error, setError]= useState(null);

 async function handleSubmit(event) {
  
  const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
const result = await response.json();
console.log(result);
setToken(result.token);
    event.preventDefault();
    try{
      }catch(error)  {
    setError(error.message);
  }
  }
    
    return (
    <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form className="Login-Form" onSubmit={handleSubmit}> 
        <label>
            Username: {" "}
            <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
             />
        </label>
        <label>
            Password: {" "}
            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            
        </label>

        
        <button className="auto">Submit</button>
        
    </form>
    </>
    );
  }