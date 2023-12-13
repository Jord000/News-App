import axios from 'axios'

const newsApi = axios.create({
  baseURL: 'https://news-app-87li.onrender.com/api',
})

export const getUsernames = () => {
  return newsApi.get('/users').then(({ data }) => {
    return data.users
  })
}

export const getArticles = (topic, sort, order) => {
  return newsApi
    .get('/articles', { params: { topic, sort, order } })
    .then(({ data }) => {
      return data.articles
    })
}

export const getArticleById = (id) => {
  const articleName = `article${id}`
  return newsApi
    .get(`/articles/${id}`)
    .then(({ data: { [articleName]: article } }) => {
      return article
    })
}

export const getCommentsById = (id) => {
  return newsApi
    .get(`/articles/${id}/comments`)
    .then(({ data: { comments } }) => {
      return comments
    })
}

export const addVotesToArticleId = (votes, id) => {
  return newsApi
    .patch(`/articles/${id}`, { params: { inc_votes: votes } })
    .then((data) => {
      return data
    })
    .catch((error) => {
      return { error }
    })
}

export const getAllTopics = () => {
  return newsApi.get(`/topics/`).then(({ data: { topics } }) => {
    return topics
  })
}

export const postCommentToArticle = (userComment, username, id) => {
  return newsApi
    .post(`/articles/${id}/comments`, {
      params: { username, body: userComment },
    })
    .then((data) => {
      return data
    })
}

export const deleteCommentById = (id) => {
  return newsApi.delete(`/comments/${id}`).catch((error) => {
    return { error }
  })
}
