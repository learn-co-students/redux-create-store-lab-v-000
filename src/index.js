import React from 'react'
import ReactDom from 'react-dom'
import CreateStore from './createStore.js'

ReactDom.render(
  <div className='app'>
    <CreateStore />
  </div>, 
  document.getElementById('main')
)