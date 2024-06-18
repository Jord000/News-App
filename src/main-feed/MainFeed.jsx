import { getArticles } from '../../api/api'
import { useEffect, useState } from 'react'
import OneArticle from './OneArticle'
import ArticleComments from './ArticleComments.jsx'
import { Box, Grid, CircularProgress } from '@mui/material'
import { useContext } from 'react'
import { UsernameContext } from '../../contexts/UsernameContext.jsx'
import { useNavigate, useSearchParams } from 'react-router-dom'

const MainFeed = () => {
  const [allArticles, setAllArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { username } = useContext(UsernameContext)
  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams()


  const topic = searchParams.get('topic')
  const sort = searchParams.get('sort')
  const order = searchParams.get('order')

  useEffect(() => {
    if (!username) {
      navigate('/')
    }
  }, [])

  useEffect(async () => {
   try{
    const articles = await getArticles(topic, sort, order)}
    catch (error){
      console.log(error)
    }
      // .then((articles) => {
      //   console.log(articles)
      //   if (articles.error) {
      //     navigate('/errorpage')
      //   } else {
      //     setAllArticles(articles)
      //   }
      // })
      // .then(() => {
      //   setIsLoading(false)
      // })
  }, [topic, sort, order])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', width:'100%' ,justifyContent:'center',marginTop:'40px'}}>
        <CircularProgress size="6rem" sx={{
        }}/>
      </Box>
    )
  }
  {
    return (
      <Box id="main-feed-box" className="main-feed-box">
        {allArticles.map((article) => {
          return (
            <Grid container direction="row" spacing={2} key={article.article_id}>
              <OneArticle article={article} key={article.id} />
              <ArticleComments article={article} key={article} />
            </Grid>
          )
        })}
      </Box>
    )
  }
}

export default MainFeed