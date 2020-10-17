import React, { useState } from 'react';
import Clock from './Clock';
import Setup from './Setup';
import WelcomeMessage from './WelcomeMessage';

function HomePage() {
  const [hasCompletedSetup, setHasCompletedSetup] = useState(false);
  const [name, setName] = useState('');

  function completeSetup(name) {
    setHasCompletedSetup(true);
    setName(name);
    return hasCompletedSetup;
  }

	if (!hasCompletedSetup) {
    return (
      <Setup completeSetup={(name) => completeSetup(name)} />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <WelcomeMessage name={name} />
      </header>
    </div>
  );
}

export default HomePage;