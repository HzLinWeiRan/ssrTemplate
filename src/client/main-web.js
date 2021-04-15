import 'core-js'
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { loadableReady } from '@loadable/component'
import App from './App'

loadableReady(() => {
    const root = document.getElementById('app')
    hydrate(<BrowserRouter><App rootStore={window.__SSR_CACHE__} /></BrowserRouter>, root)
})