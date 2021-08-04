import React from 'react'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import './SearchPage.css'
import Response from '../response'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function SearchPage() {
  const [{ term }, dispatch] = useStateValue()
  const { data } = useGoogleSearch(term)

  //const data = Response

  console.log(data)
  return (
    <div className='searchPage'>
      <div className='SearchPage__header'>
        <Link to='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg'
            alt='logo'
            className='searchPage__logo'
          />
        </Link>

        <div className='SearchPage__headerBody'>
          <Search hideButtons />

          <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
              <div className='searchPage__option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage__option'>
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className='searchPage__option'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className='searchPage__option'>
                <LocalOfferIcon />
                <Link to='/shopping'>shopping</Link>
              </div>
              <div className='searchPage__option'>
                <RoomIcon />
                <Link to='/maps'>maps</Link>
              </div>
              <div className='searchPage__option'>
                <MoreVertIcon />
                <Link to='/more'>more</Link>
              </div>
            </div>
            <div className='searchPage__optionsRight'>
              <div className='searchPage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className='SearchPage__results'>
          <p className='SearchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className='SearchPage__result'>
              <a className='SearchPage__resultLink' href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=''
                      className='searchPage__resultImage'
                    />
                  )}
                {item.displayLink} <span>▼</span>
              </a>
              <a className='SearchPage__resultTitle' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='SearchPage__resultSnippet' href={item.link}>
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
