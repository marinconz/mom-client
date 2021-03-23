import React, { useState, useEffect } from 'react';
import { Container, List, ListItem, ListItemText, Button, TextField } from '@material-ui/core'
import Cookies from 'js-cookie'


const QueueMessage = () => {

  const [messages, setMessage] = useState({});
  const [queueID, setQueueID] = useState([]);

  const handleQueueNameChange = event => {
    setQueueID(event.target.value)
  }

  const handleSubmit = async () => {
    const API_URL = `http://127.0.0.1:8000/api/queues/${queueID}/queue_messages/`;
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${Cookies.get('authToken')}`,
      }
    })
    const data = await response.json();
    setMessage(data)
  }

  console.log(messages)
  return (
    <Container>
      <TextField
        className="queue"
        required
        id="filled-basic"
        label="Indicate queue ID"
        variant="filled"
        onChange={handleQueueNameChange} />

      <Button
        className="createButton"
        onClick={handleSubmit}>Get Messages</Button>

      <List>
        <ListItem>
          <ListItemText
            primary={`${messages.length ? messages[0].message: messages.message || ''}`}
            secondary={messages.length ? `was created by ${messages[0].user.username}`: ''}
          />
        </ListItem>
      </List>
    </Container>
  )
}

export default QueueMessage