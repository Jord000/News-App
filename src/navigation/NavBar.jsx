import SortArticle from './SortArticle'
import MenuNav from './MenuNav'
import TopicNav from './TopicNav'

const NavBar = () => {

  return (
    <div className='navBar'>
      <MenuNav />
      <TopicNav />
      {location.pathname === '/myfeed' && <SortArticle />}
    </div>
  )
}

export default NavBar
