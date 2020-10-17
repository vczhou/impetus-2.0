import  React, { useState , useEffect } from 'react';

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

function WelcomeMessage() {
  return (
    <div className="App">
       <h2> {getMantra()}, Victoria </h2>
    </div>
  );
}

export default WelcomeMessage;