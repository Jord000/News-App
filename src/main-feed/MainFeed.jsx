import { getArticles } from "../../api/api"
import { useEffect, useState } from "react";
import OneArticle from "./OneArticle";
import ArticleComments from "./ArticleComments.jsx";
import { Box, Grid } from "@mui/material";


const MainFeed = () => {
    const [allArticles, setAllArticles] = useState([])


    useEffect(() => {
        getArticles().then((articles) => {
            setAllArticles(articles)
        });
    }, []);



    return (
        <Box id='main-feed-box' class='main-feed-box'>
            <Grid container spacing={2}>
                {allArticles.map((article) => {
                    console.log(article)
                    return <div key={article.article_id}>
                        <OneArticle article={article} />
                        <ArticleComments article={article} />
                    </div>
                })}
            </Grid>
        </Box>
    )

}

export default MainFeed