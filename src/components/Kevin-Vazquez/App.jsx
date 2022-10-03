import React, { StrictMode, useState } from "react";
import "./main.css";
import copyImg from "./icon/copy.png";
import chooseCharacter from "./password";

function App() {
	const [password, setPassword] = useState("");

	const generate = ()=>{
		setPassword();	
	}

	const copy = ()=>{
		document.getElementById("copy-btn").addEventListener("click", ()=>{
			document.getElementById("pass-span").focus();
			document.execCommand("selectAlll");
			document.execCommand("copy");

		});
	}

  return (
    <StrictMode>
      <div className="container">
        <form className="box" onSubmit={e => e.preventDefault()}>
          <div className="display">
            <input className="pass-span" id="pass-span" value={password} readOnly/>
            <button onClick={copy} id="copy-btn">
				<img src={copyImg} alt="" />
            </button>
          </div>
          <button onClick={generate}>Generar Password</button>
        </form>
      </div>
    </StrictMode>
  );
}

export default App;
