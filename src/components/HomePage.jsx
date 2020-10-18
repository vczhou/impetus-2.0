import React, { useState, useReducer } from 'react';
import Clock from './Clock';
import Setup from './Setup';
import WelcomeMessage from './WelcomeMessage';

import { createStore } from 'redux';
import reducer from './reducers';

import {
  setName,
  setEmail,
  setBirthday,
} from './actions'

function HomePage() {
  const store = createStore(reducer);
  console.log(store.getState());

  const [hasCompletedSetup, setHasCompletedSetup] = useState(false);
  // const [name, setName] = useState('');

  function completeSetup(name) {
    setHasCompletedSetup(true);
    // setName(name);
    return hasCompletedSetup;
  }

  if (!hasCompletedSetup) {
    return (
       <Setup 
          store={store}
          completeSetup={(name) => completeSetup(name)} />
     );
  }

  // const unsubscribe = store.subscribe(() => console.log(store.getState()));

  // store.dispatch(setName('Lucy'));

  // unsubscribe();

  const {name} = store.getState();

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