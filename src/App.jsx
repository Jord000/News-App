import EntryPage from './entry-login/EntryPage'
import LogInPage from './entry-login/LogInPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsernameProvider } from '../contexts/UsernameContext'
import MainFeed from './main-feed/MainFeed';
import Header from './entry-login/Header';
import ArticleInDetail from './main-feed/ArticleInDetail';

function App() {
    return <>
        <BrowserRouter>
            <UsernameProvider>
                <Routes>
                    <Route path="/" element={<EntryPage />} />
                    <Route path="/login" element={<><Header /><LogInPage /></>} />
                    <Route path="/myfeed" element={<><Header /><MainFeed /></>} />
                    <Route path="/article" element={<><Header /><ArticleInDetail /></>} >
                        <Route path="?id" element={<><Header /><ArticleInDetail /></>} />
                    </Route>
                </Routes>
            </UsernameProvider>
        </BrowserRouter >
    </>
}

export default App
