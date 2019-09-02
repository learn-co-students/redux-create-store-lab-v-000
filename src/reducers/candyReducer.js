import React from 'react'

function candyReducer(state = { candy: [] }, action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

export default candyReducer;
