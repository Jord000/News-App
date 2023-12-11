import { useState } from 'react'
import EntryPage from './entry-login-components/EntryPage'
import LogInPage from './entry-login-components/LogInPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsernameProvider } from '../contexts/UsernameContext'

function App() {
    return <>
        <BrowserRouter>
            <UsernameProvider>
                <Routes>
                    <Route path="/" element={<EntryPage />} />
                    <Route path="/login" element={<LogInPage />} />
                </Routes>
            </UsernameProvider>
        </BrowserRouter>
    </>
}

export default App
