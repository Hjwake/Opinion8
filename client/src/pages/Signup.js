import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { signup } from '../store/authSlice';
import {Navigate} from "react-router-dom";
import logo_orange from "../images/Opinion8_Logo-Orange_NS.svg";
import "./Signup.css";

function Signup() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.auth.user)
  const error = useSelector((state) => state.auth.error)
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    dispatch(signup({username, password}))
    .then((res) => {
      setUsername('')
      setPassword('')
    })
  }

  return (
    <div className="signup-body">
      <form onSubmit={submitHandler}>
      <div className="signup-text-and-form">
      <img src={logo_orange} className="signup-logo" alt="Opinion8" />
        <h2>Join the community of Opinioneighters.</h2>
        <p>It's getting exciting! Choose a username and password to create your account.</p>
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

        <div className="signup-button-and-terms">
          {/* <button type="button">Go back</button> */}
          <button type="submit" className="btn_orange_white_text">Sign up</button>
          <p>By signing up, you’re agreeing to our terms and conditions and privacy policy.</p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
