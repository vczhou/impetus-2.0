import React, { useState, useReducer } from 'react';
import Clock from './Clock';
import Setup from './Setup';
import WelcomeMessage from './WelcomeMessage';

function homePageReducer(state, action) {
  switch (action.type) {
    case 'COMPLETE_SETUP':
      return [
        ...state, 
        {
          hasCompletedSetup: true,
          name: action.name
        }
      ];
    default:
      return state;
  }
}

function HomePage() {
  const [state, dispatch] = useReducer(
    homePageReducer,
    {
      hasCompletedSetup: false,
      name: ''
    }
  );

	if (!state.hasCompletedSetup) {
    return (
      <Setup completeSetup={(name) => dispatch({ type: 'COMPLETE_SETUP', name: name})} />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <WelcomeMessage name={state.name} />
      </header>
    </div>
  );
}

export default HomePage;