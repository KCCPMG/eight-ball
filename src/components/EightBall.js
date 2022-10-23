import React, {useState} from 'react';

const DEFAULT_MESSAGES = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]

const EightBall = ({messages = DEFAULT_MESSAGES}) => {
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const shakeBall = () => {
    const randIndex = Math.floor(Math.random() * messages.length);
    const randMessage = messages[randIndex];
    setMessage(randMessage.msg);
    setColor(randMessage.color)
  }

  const style = {
    margin: "auto",
    color: "white",
    textAlign: "center",
    backgroundColor: color,
    borderRadius: "150px",
    width: "150px",
    height: "150px",
    display: "flex"
  }

  return (
    <div className="EightBall" onClick={shakeBall} style={style}>
      <p style={{margin: "auto"}}>{message}</p>
    </div>
  )
}

export default EightBall;