import React, { useState } from 'react';
import Clock from './Clock';
import Setup from './Setup';
import WelcomeMessage from './WelcomeMessage';
import Mantra from './Mantra';

function HomePage() {
  const [hasCompletedSetup, setHasCompletedSetup] = useState(false);
  const [name, setName] = useState('');

  function completeSetup(name) {
    setHasCompletedSetup(true);
    setName(name);
    return hasCompletedSetup;
  }

  // if (!hasCompletedSetup) {
  //   return (
  //     <Setup completeSetup={(name) => completeSetup(name)} />
  //   );
  // }

  return (
    <div className="home-page">
      <Clock />
      <WelcomeMessage name={name} />
      <Mantra />
    </div>
  );
}

export default HomePage;