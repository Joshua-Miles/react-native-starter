import React, { useState } from 'react'
import { StyleProvider } from './components'
import { MainPage } from './MainPage'


export const App = () => (
    <StyleProvider>
        <MainPage />
    </StyleProvider>
)
    