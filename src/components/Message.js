import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = ({ message, username }) => {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message__user"} `}>
      <Card className={isUser ? "usercard" : "guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="p">
            {message.username}:{message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
