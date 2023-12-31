import EntryPage from './entry-login/EntryPage'
import LogInPage from './entry-login/LogInPage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UsernameProvider } from '../contexts/UsernameContext'
import MainFeed from './main-feed/MainFeed';
import Header from './entry-login/Header';
import ArticleInDetail from './single-article/ArticleInDetail';
import NavBar from './navigation/NavBar';
import { CommentSeedProvider } from '../contexts/CommentSeedContext';
import ErrorPage from './tools-buttons/ErrorPage';



function App() {
    return <>
        <BrowserRouter>
            <UsernameProvider>
                <CommentSeedProvider>
                    <Routes>
                        <Route path="/" element={<EntryPage />} />
                        <Route path="/login" element={<><div className='login-wrapper'><Header /><LogInPage /></div></>} />
                        <Route path="/myfeed" element={<><Header /><NavBar /><MainFeed /></>} />
                        <Route path="/myfeed/:id" element={<><Header /><NavBar /><ArticleInDetail /></>} />


                        <Route path='*' element={<><Header /><NavBar /><ErrorPage /></>} />

                    </Routes>
                </CommentSeedProvider>
            </UsernameProvider>
        </BrowserRouter >
    </>
}

export default App
