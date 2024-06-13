import axios from 'axios'
import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://tqfnebakfgoxiefjxbpz.supabase.co',
  process.env.ANON_KEY
)

export const getUsernames = async () => {
  let { data: users, error } = await supabase.from('users').select('*')

  return error ? error : users
}

export const getArticles = async (topic, sort, order) => {
  const orderBool = order === 'DESC' ? false : true

  if (topic && !sort && !order) {
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*')
      .eq('topic', `${topic}`)
    return error ? error : articles
  } else if (topic && sort) {
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*')
      .eq('topic', `${topic}`)
      .order(sort, { ascending: orderBool })
    return error ? error : articles
  }
}

export const getArticleById = async (id) => {
  const { data: articles, error } = await supabase
    .from('articles')
    .select('*')
    .eq('article_id', `${id}`)
  return error ? error : articles
}

export const getCommentsById = async (id) => {
  const { data: comments, error } = await supabase
    .from('comments')
    .select('*')
    .eq('comment_id', `${id}`)
  return error ? error : comments
}

export const addVotesToArticleId = async (votes, id) => {
  const { data: currVotes, errorOne } = await supabase
    .from('articles')
    .select('votes')
    .eq('article_id', `${id}`)

  const newVoteNum = currVotes[0].votes + votes

  if (errorOne) {
    return errorOne
  }

  const { data, errorTwo } = await supabase
    .from('articles')
    .update({ votes: newVoteNum })
    .eq('article_id', id)
    .select()

  return errorTwo ? errorTwo : data
}


//

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
