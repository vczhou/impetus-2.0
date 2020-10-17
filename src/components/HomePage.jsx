import React, { useState } from 'react';
import Clock from './Clock';
import Setup from './Setup';


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
      	<Clock></Clock>
        <h2> Good Afternoon, {name} </h2>
      </header>
    </div>
  );
}

export default HomePage;