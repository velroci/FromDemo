import { useState } from 'react';
import './App.css'

import Authenticate from "/src/Components/Authenitcate";
import SignUpForm from "/src/Components/SignUpFormm";//Name to 


export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <Authenticate  token={token} setToken={setToken} />
      <SignUpForm  token={token} setToken={setToken}/>
    </>
  );
}


