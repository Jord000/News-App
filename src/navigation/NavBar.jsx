import SortArticle from './SortArticle'
import MenuNav from './MenuNav'
import TopicNav from './TopicNav'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const NavBar = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState(searchParams.get('sort') || '')
  const [order, setOrder] = useState(searchParams.get('order') || 'ASC')
  const [screen, setScreen] = useState(window.innerWidth)
  let topic = searchParams.get('topic')


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
      <div className='navBar'>
        <MenuNav screen={screen} />
        <TopicNav setOrder={setOrder} setSort={setSort} screen={screen} />
        {location.pathname === '/myfeed' &&
          <SortArticle order={order} sort={sort} setOrder={setOrder} setSort={setSort} screen={screen} />}
      </div>
      {topic && <p className='topic-tag'>{topic.charAt(0).toUpperCase() + topic.slice(1)}</p>}
    </>
  )
}

export default NavBar
