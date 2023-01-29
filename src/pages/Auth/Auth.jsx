import React, { useState } from "react";
import "./Auth.css";
import icon from "../../assets/icon.png";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(isSignUp){
      if(!email && !password){
        alert("please enter email & password")
      }
      if(!name){
        alert("please enter name")
      }
      
      dispatch(signup({name, email, password}, navigate))
    }
    else{
      dispatch(login({email, password}, navigate))
    }
  }

  return (
    <section className="auth-section">
        {isSignUp && (<AboutAuth/>)}
      <div className="auth-container-2">
        {!isSignUp && (
          <img src={icon} alt="stack-overflow" className="login-icon" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="name" name="name" id="name" required onChange={(e)=>{setName(e.target.value)}}/>
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" required onChange={(e)=>{setEmail(e.target.value)}}/>
          </label>
          <label htmlFor="password">
            <div className="password-div">
              <h4>Password</h4>
              {!isSignUp && <p style={{fontSize: '13px', color: '#007ac6'}}>Forgot password?    </p>}
            </div>
            <input type="password" name="password" id="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
            {isSignUp && (
              <p style={{fontSize: '13px', color: '#666767'}}>
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>
            )}
          </label>
          {isSignUp && (
            <label htmlFor="check" className="check-div">
              <input type="checkbox" id="check" />
              <p style={{fontSize: '15px', margin: '0'}}>
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignUp ? "Sign up" : "Log in"}
          </button>
          {isSignUp && (
            <p style={{fontSize: '13px', color: '#666767'}}>
              By clicking “Sign up”, you agree to our terms of service, privacy
              policy and cookie policy
            </p>
          )}
        </form>
        <p>
          {isSignUp ? "Already have an account?" : `Don't have an account?`}
          <button className="handle-switch-btn" onClick={handleSwitch}>
            {isSignUp ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
