import { Grid, Fab } from "@mui/material"
import { truncateText } from "../../utils/truncateText"
import MoreIcon from '@mui/icons-material/More';
import { Link, useParams } from "react-router-dom";

const OneArticle = ({ article }) => {
    const { author, comment_count, created_at, title, votes, topic, body, article_id } = article

    return <>
        <Grid item xs={8}>
            <h2>{title}</h2>
            <p className="article-detail">Topic - {topic}</p>
            <p className="article-detail">Posted by author - {author}</p>
            <p className="article-detail">Date Posted- {created_at.substring(0, 10)}</p>
            <p className="small-article-body">{truncateText(body)}</p>
            <b className="read-more">read more          </b>
            <Link to={`/myfeed/${article_id}`}>
            <Fab sx={{ backgroundColor: '#6e94db' }} variant="extended" size="small" color="primary">
                <MoreIcon className="more-icon" />
            </Fab>
            </Link>
        </Grid>
    </>
}

export default OneArticle