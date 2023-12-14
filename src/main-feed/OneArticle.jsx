import { Grid, Fab, Box, ButtonBase } from "@mui/material"
import { truncateText } from "../../utils/truncateText"
import MoreIcon from '@mui/icons-material/More';
import { Link, useNavigate, useParams } from "react-router-dom";

const OneArticle = ({ article }) => {
    const { author, comment_count, created_at, title, votes, topic, body, article_id } = article
    const navigate = useNavigate()


    return <>
        <Grid item xs={7.5} onClick={() => { navigate(`/myfeed/${article_id}`) }}
            style={{
                backgroundColor: 'rgb(249, 245, 250)',
                padding: '10px',
                borderRadius: '8px',
                filter: 'drop-shadow(2px 2px 4px grey)',
                transition: 'background-color .3s',
                marginBottom: '30px'
            }}
        >
            <h2 className="main-feed-article-title">{title}</h2>
            <p className="article-detail">Topic - {topic}</p>
            <p className="article-detail">Posted by author - {author}</p>
            <p className="article-detail">Date Posted- {created_at.substring(0, 10)}</p>
            <p className="small-article-body">{truncateText(body)}</p>
            <div className="read-more-container">
                <Link to={`/myfeed/${article_id}`}>
                    <Fab sx={{ backgroundColor: '#6e94db', ml: 'auto' }} variant="extended" size="small" color="primary" >
                        <MoreIcon className="more-icon" />
                    </Fab>
                </Link>
            </div>

        </Grid >
    </>
}

export default OneArticle