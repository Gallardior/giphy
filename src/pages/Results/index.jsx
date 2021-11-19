import React, {useState} from 'react'
import { LazyTrendGifs } from '../../components/TrendGifs/LazyTrendsGifs'
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs'
import { GridLoader } from '../../components/GridLoader/GridLoader'
// import { Loader } from '../../components/Loader/Loader'
import { useGifs } from '../../hooks/useGifs'

const Results = ({keyword}) => {
  const { loading, gifs, setPage } = useGifs(keyword)

  function handlePrevPage() {
    setPage(actualPage => actualPage - 1)
  }
  
  function handleNextPage() {
    setPage(actualPage => actualPage + 1)
  }

  return (
    <div className="App__content">
      <div className="Gifs__container">
        <h3 className="LastKey__title">{ decodeURI(keyword) }</h3>
        {
          loading  
            ? <GridLoader />
            : <ListOfGifs gifs={gifs} />
        }
      </div>
      <LazyTrendGifs />
      <button onClick={ handlePrevPage }>Prev Page</button>
      <button onClick={ handleNextPage }>Next Page</button>
    </div>
  )
}

export { Results }