import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import Cookies from 'js-cookie';

const API_URL = 'http://127.0.0.1:8000/api/queues/';

const CreateQueue = ({fetchQueues}) =>{
  console.log('Este es el fetch ', fetchQueues)
  const [name, setName] = useState('');

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleSubmit = async() => {
    await fetch(API_URL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${Cookies.get('authToken')}`,
      },
      body: JSON.stringify({title: name})
    })
    fetchQueues()
  }
  
  return(
    <div>
      <h2>Create Queue</h2>
        <TextField
        className="username"
        required
        id="filled-basic"
        label="Queue Title"
        variant="filled"
        onChange={handleNameChange}/>

      <Button
        className="createButton"
        onClick={handleSubmit}>Create</Button>
      </div>

  )
}

export default CreateQueue