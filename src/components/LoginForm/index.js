import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';

import './LoginForm.css'

const LoginForm = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const handleUserChange = event => {
    setUser(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const history = useHistory();
  const handleSubmit = () => {
    fetch('http://127.0.0.1:8000/api/users/login/', {
      method: 'POST',
      body: JSON.stringify({ username: user, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((data) => {
      if (data.ok) {
        data.json().then(response => {
          Cookies.set('authToken', response.token);
          history.push("/queues");
        })
      } else {
        setError('Incorrect username or password')
      }
    })
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

        <Button
          className="logButton"
          onClick={handleSubmit}>Login</Button>
          <br/>
        {error}
        <h4>or</h4>
        <Link to="/signup"
        >Signup</Link>
      </div>
    </div>
  )
}

export default LoginForm