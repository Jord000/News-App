import { getArticles } from "../../api/api"
import { useEffect, useState } from "react";
import OneArticle from "./OneArticle";
import ArticleComments from "./ArticleComments.jsx";
import { Box, Grid, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { UsernameContext } from "../../contexts/UsernameContext.jsx";
import { useNavigate } from "react-router-dom";


const MainFeed = () => {
    const [allArticles, setAllArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { username } = useContext(UsernameContext);
    const navigate = useNavigate()

    useEffect(() => {
        getArticles().then((articles) => {
            setAllArticles(articles)
        }).then(() => {
            setIsLoading(false)
        });
    }, []);

    if (!username) {
        navigate('/login')
    }
    else if (isLoading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>)
    }
    else {
        return (
            <Box id='main-feed-box' className='main-feed-box' >

                {allArticles.map((article) => {
                    return <Grid container spacing={2} key={article.article_id}>
                        <OneArticle article={article} key={article.id} />
                        <ArticleComments article={article} key={article} />
                    </Grid>

                })}

            </Box >)
    }



}

export default MainFeed