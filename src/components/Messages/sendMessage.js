import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import Cookies from 'js-cookie';

const API_URL = 'http://127.0.0.1:8000/api/queue_messages/';

const SendTask = () =>{
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleIdChange = event => {
    setId(event.target.value)
  }

  const handleMessageChange = event => {
    setMessage(event.target.value)
  }

  const handleSubmit = () => {
    fetch(API_URL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${Cookies.get('authToken')}`,
      },
      body: JSON.stringify({queue: id, message})
    })
  }
  
  return(
    <div>
      <h2>Send Message to Queue</h2>
        <TextField
        className="message"
        required
        id="filled-basic"
        label="Message"
        variant="filled"
        onChange={handleMessageChange}/>

        <TextField
        className="id"
        required
        id="filled-basic"
        label="Queue"
        variant="filled"
        onChange={handleIdChange}/>

      <Button
        className="createButton"
        onClick={handleSubmit}>Send Message</Button>
      </div>

  )
}

export default SendTask