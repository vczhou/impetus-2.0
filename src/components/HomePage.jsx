import React from 'react';
import Clock from './Clock'

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
      	<Clock></Clock>
        <h2> Good Afternoon, Victoria </h2>
      </header>
    </div>
  );
}

export default HomePage;