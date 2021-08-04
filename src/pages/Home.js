import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps'
import {Avatar} from '@material-ui/core'
import Search from '../components/Search'

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className='home__body'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg' alt='logo'/>
        <Search />
      </div>
    </div>
  )
}

export default Home
