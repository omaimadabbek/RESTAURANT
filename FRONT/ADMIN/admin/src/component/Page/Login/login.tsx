import { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import "./login.style.css";

export default function Login() {
  const [nom,setNom]=useState("")
  const [prenom,setPrenom]=useState("")
  const [mdp,setMdp]=useState("")
  const [email,setEmail]=useState("")
  const [type,setType]=useState("")




  
  async function AddAdmin (){
    fetch('http://localhost:5000/Admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
       
        nom: nom,
        prenom: prenom,
        mot_de_passe: mdp,
        email: email,
        type: type
    })
  })
        .then(response => response.json())
        .catch(error => {
        
          console.error('There was an error!', error);
      });
  }
  return (
    <div className="bodyLogin__CLZ">
      <div className="main">
        <input
          className="input_login__CLZ"
          type="checkbox"
          id="chk"
          aria-hidden="true"
        />

        <div className="signup">
          <form>
            <label className="label_login__CLZ" htmlFor="chk" aria-hidden="true">
              Inscription
            </label>
            <input
              className="input_login__CLZ"
              type="text"
              name="txt"
              placeholder="Nom"
              onChange={(e:any)=>setNom(e.target.value)}
            />
            <input
              className="input_login__CLZ"
              type="text"
              name="txt"
              placeholder="Prenom"
              onChange={(e:any)=>setPrenom(e.target.value)}
            />
            <input
              className="input_login__CLZ"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e:any)=>setEmail(e.target.value)}
            />
            <input
              className="input_login__CLZ"
              type="password"
              name="pswd"
              placeholder="Password"
              onChange={(e:any)=>setMdp(e.target.value)}
            />

            <div className="radio__clz">
              <div style={{ marginRight: "20px" }}>
            
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    id="Admin"
                    value="Admin"
                    onChange={(e:any)=>setType(e.target.value)}
                  />
                  {' '}
                  <Label check>
                    Admin
                  </Label>
                </FormGroup>
              </div>

            
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                  id="Cassier"
                    value="Cassier"
                    onChange={(e:any)=>setType(e.target.value)}
                />
                {' '}
                <Label check>
                  Cassier
                </Label>
              </FormGroup>
            </div>

            <button className="button_login__CLZ" onClick={()=>AddAdmin()}>Inscription</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label className="label_login__CLZ" htmlFor="chk" aria-hidden="true">
              Connexion
            </label>
            <input
              className="input_login__CLZ"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="input_login__CLZ"
              type="password"
              name="pswd"
              placeholder="Password"
            />
            <button className="button_login__CLZ">Connexion</button>
          </form>
        </div>
      </div>
    </div>
  );
}