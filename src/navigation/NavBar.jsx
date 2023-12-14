import SortArticle from './SortArticle'
import MenuNav from './MenuNav'
import TopicNav from './TopicNav'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const NavBar = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState(searchParams.get('sort') || '')
  const [order, setOrder] = useState(searchParams.get('order') || 'ASC')

  return (
    <div className='navBar'>
      <MenuNav />
      <TopicNav setOrder={setOrder} setSort={setSort} />
      {location.pathname === '/myfeed' &&
        <SortArticle order={order} sort={sort} setOrder={setOrder} setSort={setSort} />}
    </div>
  )
}

export default NavBar
