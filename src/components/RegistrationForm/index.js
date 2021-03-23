import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'

const SignupForm = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');

  const handleUserChange = event => {
    setUser(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleSecondPasswordChange = (event) => {
    setPassword2(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = () => {
    console.log('Intento 2')
    fetch('http://127.0.0.1:8000/api/users/register/', {
      method: 'POST',
      body: JSON.stringify({ username: user, password, password2, email }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((data) => {
      data.json().then(response => {
        Cookies.set('authToken', response.token);
      })
    });
  }

  return (
    <div className='caja'>
      <div>
        <h2>Login Information</h2>
        <TextField
          value={user}
          className="username"
          required
          id="filled-basic"
          label="Username"
          variant="filled"
          onChange={handleUserChange} />

        <TextField
          value={password}
          className="password"
          required
          id="filled-basic"
          label="Password"
          variant="filled"
          onChange={handlePasswordChange} />

        <TextField
          value={password2}
          className="password2"
          required
          id="filled-basic"
          label="Password confirmation"
          variant="filled"
          onChange={handleSecondPasswordChange} />

        <TextField
          value={email}
          className="email"
          required
          id="filled-basic"
          label="Email"
          variant="filled"
          onChange={handleEmailChange} />

        <Button
          className="signUpButton"
          onClick={handleSubmit}>Register</Button>

        <Link to="/login"
        >Go back and login</Link>
      </div>
    </div>
  )
}

export default SignupForm