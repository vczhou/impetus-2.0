import React from 'react';
import { createStore } from 'redux';
import reducer from './reducers';

import {
  SET_NAME,
  SET_EMAIL,
  SET_BIRTHDAY,
} from './actions'

const store = createStore(reducer);
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(setName('Lucy'));
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe();