import { useContext, useEffect, useState } from 'react'
import { getAllTopics } from '../../api/api'
import TopicNav from './TopicNav'
import MenuNav from './MenuNav'

const NavBar = () => {

  return (
    <div>
      <MenuNav />
      <TopicNav/>
    </div>
  )
}

export default NavBar
