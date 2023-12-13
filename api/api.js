import axios from 'axios'

const newsApi = axios.create({
  baseURL: 'https://news-app-87li.onrender.com/api',
})

export const getUsernames = () => {
  return newsApi.get('/users').then(({ data }) => {
    return data.users
  })
}

export const getArticles = () => {
  return newsApi.get('/articles').then(({ data }) => {
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
  return newsApi.get(`/topics/`).then(({ data: { topics } }) => {
    return topics
  })
}

export const postCommentToArticle = (userComment, username, id) => {
  const postBody = { username, body: userComment }
  return newsApi.post(`/articles/${id}/comments`, postBody).then((data) => {
    return data
  })
}


export const deleteCommentById = (id) => {
  return newsApi.delete(`/comments/${id}`)
}