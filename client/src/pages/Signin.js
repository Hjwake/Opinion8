import {useState} from 'react';
import {signin} from '../store/authSlice';
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import logo_orange from "../images/Opinion8_Logo-Orange_NS.svg";
import "./Signin.css";

function Signin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.auth.user)
  const error = useSelector((state) => state.auth.error)
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    dispatch(signin({username, password}))
    .then(() => {
      setUsername('')
      setPassword('')
    })
  }

  return (
    <div className="signin-body">
      <form onSubmit={submitHandler}>
      <div className="signup-text-and-form">
      <img src={logo_orange} className="signin-logo" alt="Opinion8"/>
        <h2>Welcome back!</h2>
        <p>Sign in here with your username and password if you already have an account.</p>
        <div className="form-group">
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}/ >
        </div>
        <div className="form-group">
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/ >
        </div>
        {error ? <p>{error}</p> : null}
        {user ? <Navigate to='/profile' replace={true} /> : null}
        </div>
        <div>
          {/* <button type="button">Cancel</button> */}
          <button type="submit" className="btn_orange_white_text">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
