import EntryPage from './entry-login/EntryPage'
import LogInPage from './entry-login/LogInPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsernameProvider } from '../contexts/UsernameContext'
import MainFeed from './main-feed/MainFeed';
import Header from './entry-login/Header';

function App() {
    return <>
        <BrowserRouter>
            <UsernameProvider>
                <Routes>
                    <Route path="/" element={<EntryPage />} />
                    <Route path="/login" element={<><Header /><LogInPage /></>} />
                    <Route path="/myfeed" element={<><Header /><MainFeed /></>} />
                </Routes>
            </UsernameProvider>
        </BrowserRouter>
    </>
}

export default App
