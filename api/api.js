import axios from 'axios'
import 'dotenv/config'

const anonKey = `apikey=${process.env.ANON_KEY}`

const newsApi = axios.create({
  // baseURL: 'https://news-app-87li.onrender.com/api',
 baseURL: `https://tqfnebakfgoxiefjxbpz.supabase.co/rest/v1/`
})

export const getUsernames = async () => {
  return newsApi.get(`/users?${anonKey}`).then(({ data }) => {
    return data
  })
}



export const getArticles = (topic, sort, order) => {
  return newsApi
    .get('/articles', { params: { topic, sort_by: sort, order } })
    .then(({ data }) => {
      return data.articles
    })
    .catch((error) => {
      return { error }
    })
}

export const getArticleById = (id) => {
  const articleName = `article${id}`
  return newsApi
    .get(`/articles/${id}`)
    .then(({ data: { [articleName]: article } }) => {
      return article
    })
    .catch((error) => {
      return { error }
    })
}

export const getCommentsById = (id) => {
  return newsApi
    .get(`/articles/${id}/comments`)
    .then(({ data: { comments } }) => {
      return comments
    })
    .catch((error) => {
      return { error }
    })
}

export const addVotesToArticleId = (votes, id) => {
  const patchBody = { inc_votes: votes }
  return newsApi
    .patch(`/articles/${id}`, patchBody)
    .then((data) => {
      return data
    })
    .catch((error) => {
      return { error }
    })
}

export const getAllTopics = () => {
  return newsApi
    .get(`/topics/`)
    .then(({ data: { topics } }) => {
      return topics
    })
    .catch((error) => {
      return { error }
    })
}

export const postCommentToArticle = (userComment, username, id) => {
  const postBody = { username, body: userComment }
  return newsApi.post(`/articles/${id}/comments`, postBody).then((data) => {
    return data
  })
}

export const deleteCommentById = (id) => {
  return newsApi.delete(`/comments/${id}`).catch((error) => {
    return { error }
  })
}