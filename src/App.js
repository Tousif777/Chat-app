import { useEffect, useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([]);
  const [username, setusername] = useState("");

  useEffect(() => {
    db.collection("message")
      .orderBy()
      .onSnapshot((snapshot) => {
        setmessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setusername(prompt("enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("message").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };

  console.log(messages);

  return (
    <div className="app">
      <div className="topbar">
        <h1>Chat app</h1>
        {!username ? <p>no user </p> : <p>welcome {username}</p>}
      </div>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Your text</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!input}
          onClick={sendMessage}
        >
          send
        </Button>
      </form>
      {messages.map((message) => (
        <Message message={message} username={username} />
      ))}
    </div>
  );
}

export default App;
