import  React, { useState , useEffect } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function getMantra() {
  const date = new Date();
  const hours = date.getHours();
  let mantra = "";
  if (hours < 12) {
    mantra = "Good Morning"
  } else if (hours < 17) {
    mantra = "Good Afternoon"
  } else {
    mantra = "Good Evening"
  }
  return mantra;
}

function WelcomeMessage(props) {
  return (
    <div className="welcome">
       <Title> {getMantra()}, Victoria </Title>
    </div>
  );
}

export default WelcomeMessage;