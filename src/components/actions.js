import React from 'react';

/*
 * action types
 */

export const SET_NAME = 'SET_NAME'
export const SET_BIRTHDAY = 'SET_BIRTHDAY'
export const SET_EMAIL = 'SET_EMAIL'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
export function setName(name) {
  return { type: SET_NAME, name }
}

export function setBirthday(date) {
  return { type: SET_BIRTHDAY, date }
}

export function setEmail(email) {
  return { type: SET_EMAIL, email }
}