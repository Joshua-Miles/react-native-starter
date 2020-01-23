import React from 'react'
import { StyleProvider } from './components'
import { MainPage } from './MainPage'
import { Router } from './Router'
import { Route } from 'react-router'


export const App = () => (
    <StyleProvider>
        <Router>
            <Route path="/" component={MainPage} />
        </Router>
    </StyleProvider>
)
    