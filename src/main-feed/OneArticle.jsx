import { Grid, Fab, createTheme, ThemeProvider } from '@mui/material'
import { truncateText } from '../../utils/truncateText'
import MoreIcon from '@mui/icons-material/More'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ConditionalScreenDiv from '../tools-buttons/ConditionalScreenDiv'

const OneArticle = ({ article }) => {
    const {
        author,
        comment_count,
        created_at,
        title,
        votes,
        topic,
        body,
        article_id,
        article_img_url,
    } = article
    const navigate = useNavigate()
    const [screen, setScreen] = useState(window.innerWidth)
    const breakpointValues = {
        xs: 0,
        sm: 500,
        md: 1000,
        lg: 1200,
        xl: 1500,
    }
    const theme = createTheme({ breakpoints: { values: breakpointValues } })

    const handleResize = () => {
        setScreen(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid
                    item
                    xs={7.5}
                    onClick={() => {
                        navigate(`/myfeed/${article_id}`)
                    }}
                    sx={{
                        backgroundColor: 'rgb(249, 245, 250)',
                        padding: '10px',
                        borderRadius: '8px',
                        filter: 'drop-shadow(2px 2px 4px grey)',
                        marginBottom: '30px',
                        display: { xs: 'block', md: 'flex' },
                        transition: theme.transitions.create(
                            'background-color 100s, box-shadow 100s'
                        ),
                        '&:hover': {
                            transition: '.5s ease',
                            backgroundColor: 'white',
                            boxShadow: '4px 4px 8px #666',
                        },
                    }}
                >
                    {' '}
                    <ConditionalScreenDiv
                        screen={screen}
                        size={1000}
                        className={'main-feed-conditional-wrapper'}
                    >
                        <div className="main-feed-title-img-container">
                            <div style={{ width: '100%' }}>
                                <h2 className="main-feed-article-title">{title}</h2>
                                <p className="article-detail">Topic - {topic}</p>
                            </div>
                            {screen < 1000 && (
                                <div className="main-feed-article-icon-container">
                                    <img
                                        className="main-feed-article-icon"
                                        src={article_img_url}
                                        alt={`image relating to ${title}`}
                                    />
                                </div>
                            )}
                        </div>
                        <p className="article-detail">Posted by author - {author}</p>
                        <p className="article-detail">
                            Date Posted- {created_at.substring(0, 10)}
                        </p>
                        <p className="small-article-body">{truncateText(body)}</p>
                        <div className="read-more-container">
                            <Link to={`/myfeed/${article_id}`}>
                                <Fab
                                    sx={{ backgroundColor: '#6e94db', ml: 'auto' }}
                                    variant="extended"
                                    size="small"
                                    color="primary"
                                >
                                    <MoreIcon className="more-icon" />
                                </Fab>
                            </Link>
                        </div>
                    </ConditionalScreenDiv>
                    {screen > 1000 && (
                        <img
                            className="main-feed-article-img"
                            src={article_img_url}
                            alt={`image relating to ${title}`}
                        />
                    )}
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default OneArticle
