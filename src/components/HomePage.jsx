import React from 'react';
import Clock from './Clock';
import WelcomeMessage from './WelcomeMessage';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
      	<Clock />
        <WelcomeMessage />
      </header>
    </div>
  );
}

export default HomePage;