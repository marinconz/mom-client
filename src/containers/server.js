import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core'
import Cookies from 'js-cookie'

import QueueMessage from '../components/Messages/getMessage'
import ServerList from '../components/ServerList';

function Server() {

  const FETCH_QUEUES_API_URL = 'http://127.0.0.1:8000/api/queues/';
  const fetchQueues = async () => {
    const response = await fetch(FETCH_QUEUES_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${Cookies.get('authToken')}`,
      }
    })
    const data = await response.json();
    setQueues(data)
  }

  const [queues, setQueues] = useState([]);
  useEffect(() => {
    fetchQueues()
  }, [])

  return (
    <Container>
      <h1>Messages being processed:</h1>
      <ServerList fetchQueues={fetchQueues} queues={queues} />
      <QueueMessage fetchQueues={fetchQueues} queues={queues}/>
    </Container>
  );

}
export default Server