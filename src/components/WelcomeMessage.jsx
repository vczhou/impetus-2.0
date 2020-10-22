import  React, { useState , useEffect } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function getGreeting() {
  const date = new Date();
  const hours = date.getHours();
  let greeting = "";
  if (hours < 3) {
    greeting = "Good Evening"
  } else if (hours < 12) {
    greeting = "Good Morning"
  } else if (hours < 17) {
    greeting = "Good Afternoon"
  } else {
    greeting = "Good Evening"
  }
  return greeting;
}

function WelcomeMessage(props) {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    var timer = setInterval(()=>setGreeting(getGreeting()), 1000 * 60 * 30)
      return function cleanup() {
        clearInterval(timer);
      }
  }); 

  return (
    <div className="welcome">
       <Title> {greeting}, {props.name}! </Title>
    </div>
  );
}

export default WelcomeMessage;