import { createClient } from '@supabase/supabase-js'

const key = import.meta.env.VITE_ANON_KEY


const supabase = createClient(
  'https://tqfnebakfgoxiefjxbpz.supabase.co', key

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
  } else if(!topic){
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*')
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
    .eq('article_id', `${id}`)
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

export const getAllTopics = async () => {
  const { data: topics, error } = await supabase.from('topics').select('*')

  return error ? error : topics
}

export const postCommentToArticle = async (userComment, author, articleId) => {
  const { data: commentResponse, error } = await supabase
    .from('comments')
    .insert([{ body: userComment, author: author, article_id: articleId }])
    .select()

  return error ? error : commentResponse
}

export const deleteCommentById = async (id) => {
  const {data, error } = await supabase
  .from('comments')
  .delete()
  .eq('comment_id', id).select()
  
  if(!data.length){throw 'No comment found - nothing deleted'}

  return error ? error : {deletedItem: data}
}

