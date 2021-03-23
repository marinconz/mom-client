import React, { useState, useEffect } from 'react';
import { Container, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Cookies from 'js-cookie'

const QueueList = ({queues, fetchQueues}) => {
  const deleteQueue = (id) => {
    fetch(`http://127.0.0.1:8000/api/queues/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${Cookies.get('authToken')}`,
      },
    }).then(
      fetchQueues()
    )
  }
  
return (
  <Container>
    <List>
      {queues.map(queue => {
        return (
          <ListItem>
            <ListItemText
              primary={`${queue.title} was created by ${queue.user.username} and has ${queue.qmessages.length || 0} messages`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteQueue(queue.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      }
      )

      }

    </List>
  </Container>
)
}

export default QueueList