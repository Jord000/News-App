import { Grid, Fab } from "@mui/material"
import { truncateText } from "../../utils/truncateText"


const OneArticle = ({ article }) => {
    const { author, comment_count, created_at, title, votes, topic, body } = article
    const moreDetailButton = () => {

    }

    return <>
        <Grid item xs={8}>
            <h2>{title}</h2>
            <p className="article-detail">Topic - {topic}</p>
            <p className="article-detail">Posted by author - {author}</p>
            <p className="article-detail">Date Posted- {created_at.substring(0, 10)}</p>
            <p className="small-article-body">{truncateText(body)}</p>
            <Fab variant="extended" size="small" color="primary" onClick={moreDetailButton}>
                ...
            </Fab>

        </Grid>
    </>
}

export default OneArticle