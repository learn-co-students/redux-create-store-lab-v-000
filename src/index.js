import React, { Component } from 'react'

import ReactDom from 'react-dom'

import CreateStore from './createStore.js'

ReactDom.render(
  <CreateStore />, 
  document.getElementById('main')
)