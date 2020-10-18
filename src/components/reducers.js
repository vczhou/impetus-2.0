import React from 'react';
import {
  SET_NAME,
  SET_EMAIL,
  SET_BIRTHDAY,
} from './actions'

function reducer(state = [], action) {
  switch (action.type) {
    case SET_NAME:
      return [
        ...state,
        {
          name: action.name,
          completed: false
        }
      ]
    case SET_EMAIL:
      return [
        ...state,
        {
          email: action.email,
          completed: false
        }
      ]
    case SET_BIRTHDAY:
      return [
        ...state,
        {
          date: action.date,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default reducer;