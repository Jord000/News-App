import axios from 'axios'
import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://tqfnebakfgoxiefjxbpz.supabase.co',
  process.env.ANON_KEY
)

export const getUsernames = async () => {
  let { data: users, error } = await supabase.from('users').select('*')

  return users
}

export const getArticles = async (topic, sort, order) => {
  // return newsApi
  //   .get('/articles', { params: { topic, sort_by: sort, order } })
  //   .then(({ data }) => {
  //     return data.articles
  //   })
  //   .catch((error) => {
  //     return { error }
  //   })
  const orderBool = order === 'DESC' ? false : true

  if (topic && !sort && !order) {
    let { data: articles, error } = await supabase
      .from('articles')
      .select('*')
      .eq('topic', `${topic}`)
    return articles
  } else if (topic && sort) {
    let { data: articles, error } = await supabase
      .from('articles')
      .select('*')
      .eq('topic', `${topic}`)
      .order(sort, { ascending: orderBool })
    return articles
  }
}

console.log(await getArticles('coding', 'article_id'))

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
