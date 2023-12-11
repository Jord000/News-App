import { Grid } from "@mui/material"

const OneArticle = ({ article }) => {
    const { author, comment_count, created_at, title, votes, topic, body } = article
    return <>
        <Grid item xs={8}>
            <h2>{title}</h2>
            <p className="article-detail">Topic - {topic}</p>
            <p className="article-detail">Posted by author - {author}</p>
            <p className="article-detail">Date Posted- {created_at.substring(0, 10)}</p>
            <p className="small-article-body">{body}</p>
        </Grid>
    </>
}

export default OneArticle