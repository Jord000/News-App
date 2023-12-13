import { Button, Menu, MenuItem } from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { UsernameContext } from '../../contexts/UsernameContext'
import { getAllTopics } from '../../api/api'
import SortArticle from './SortArticle'
import MenuNav from './MenuNav'
import TopicNav from './TopicNav'

const NavBar = () => {

  return (
    <div className='navBar'>
      <MenuNav />
      <TopicNav/>
      {location.pathname==='/myfeed' && <SortArticle />}
    </div>
  )
}

export default NavBar
