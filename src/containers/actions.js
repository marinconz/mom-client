import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core'
import Cookies from 'js-cookie'

import QueueList from '../components/List/index'
import CreateQueue from '../components/CreateQueue'
import SendTask from '../components/Messages/sendMessage'


const FETCH_QUEUES_API_URL = 'http://127.0.0.1:8000/api/queues/';

function UserActions() {
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

  console.log(fetchQueues)

  return (
    <Container>
      <QueueList fetchQueues={fetchQueues} queues={queues}/>
      <CreateQueue fetchQueues={fetchQueues}/>
      <SendTask />
    </Container>
  )
}

export default UserActions