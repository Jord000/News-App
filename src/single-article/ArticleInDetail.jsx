import { useEffect, useState } from 'react'
import { getArticleById } from '../../api/api'
import { Box, CircularProgress } from '@mui/material'
import CommentsById from './CommentsById'
import { useNavigate, useParams } from 'react-router-dom'
import VotingButton from '../tools-buttons/VotingButton'
import { useContext } from 'react'
import { UsernameContext } from '../../contexts/UsernameContext'
import AddComment from '../tools-buttons/AddComment'
import ConditionalScreenDiv from '../tools-buttons/ConditionalScreenDiv'

const ArticleInDetail = () => {
  const [foundArticle, setFoundArticle] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [screen, setScreen] = useState(window.innerWidth)

  const { username } = useContext(UsernameContext)
  const navigate = useNavigate()
  const { id } = useParams()

  const handleResize = () => {
    setScreen(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!username) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    getArticleById(id)
      .then((article) => {
        if (article.error) {
          navigate('/errorpage')
        }
        setFoundArticle(article)
      })
      .then(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  } else
    return (
      <>
        {' '}
        <div className="found-article-by-id">
          <ConditionalScreenDiv
            screen={screen}
            size={900}
            className={'landscape-container'}
          >
            <div>
              <h2 className="article-in-detail-title">{foundArticle.title}</h2>
              <p className="article-author"> By {foundArticle.author}</p>
            </div>
            <div className='article-image-container'>
              <img
                className="article-image"
                src={foundArticle.article_img_url}
                alt={`image relating to ${foundArticle.title}`}
              />
            </div>
          </ConditionalScreenDiv>
          <p className="found-article-body">{foundArticle.body}</p>
        </div>
        <div className="found-article-votes-comment">
          <VotingButton votes={foundArticle.votes} id={id} />
          <AddComment id={id} comments={comments} setComments={setComments} />
        </div>
        <CommentsById id={id} comments={comments} setComments={setComments} />
      </>
    )
}

export default ArticleInDetail
