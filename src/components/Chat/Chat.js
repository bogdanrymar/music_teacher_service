import { Avatar, TextField } from "@mui/material";
import React, {useContext, useState} from "react";
import { Container } from "reactstrap";
import { Context } from "../../index";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useAuthState } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";
import {useCollectionData} from "react-firebase-hooks/firestore"
import firebase from "firebase/compat";
const Chat = () => {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })

    setValue('')
  }

  return(
    <Container>
      <Grid container
            style={{height:window.innerHeight - 140, marginTop: 10}}
            justifyContent={'center'}    
            >
          <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
                  {messages?.map(message =>
                      <div style={{
                          margin: 10,
                          border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                          marginLeft: user.uid === message.uid ? 'auto' : '10px',
                          width: 'fit-content',
                          padding: 5,
                      }}>
                          <Grid container>
                              <Avatar src={message.photoURL}/>
                              <div>{message.displayName}</div>
                          </Grid>
                          <div>{message.text}</div>
                      </div>
                  )}
              </div>
          <Grid
              container
              direction={"column"}
              alignItems={'flex-end'}
              style={{width: '80%'}}
              >
                <TextField 
                  fullWidth
                  variant={"outlined"}
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
                <Button onClick={sendMessage}>Send</Button>
            </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;