import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticleById } from "../../api/api";
import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";



const ArticleInDetail = () => {
    const {id} = useParams();

    const [foundArticle, setFoundArticle] = useState({
        title: '',
        body: '',
        author: '',
        article_img_url: '',
        article_id: '',
        comment_count: 0,
        created_at: '',
        topic: '',
        votes: 0,
    })

    const [isLoading, setIsLoading] = useState(true)
    const [searchParams] = useSearchParams();

    useEffect(() => {
        getArticleById(id).then((article) => {
            setFoundArticle(article)
        }).then(() => {
            setIsLoading(false)
        });
    }, []);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>)
    } else return (
        <div className="found-article-by-id">
            <h2>{foundArticle.title}<br className="line-break-article"></br>By {foundArticle.author}</h2>
            <img className='article-image' src={foundArticle.article_img_url} alt={`image relating to ${foundArticle.title}`} />
            <p className="found-article-body">{foundArticle.body}</p>
        </div>
    )

}

export default ArticleInDetail