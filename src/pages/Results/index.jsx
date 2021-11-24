import React, { useEffect, useCallback } from 'react'
import { LazyTrendGifs } from '../../components/TrendGifs/LazyTrendsGifs'
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs'
// import { GridLoader } from '../../components/GridLoader/GridLoader'
// import { Loader } from '../../components/Loader/Loader'
import { useGifs } from '../../hooks/useGifs'
import { useNearScreen } from '../../hooks/useNearScreen'
import debounce from "just-debounce-it"

const Results = ({keyword}) => {
  const { loading, gifs, setPage } = useGifs(keyword)
  const { show, elementRef } = useNearScreen({distance: '300px', once: false})
  
  
  const handleNextPage = () => setPage(actualPage => actualPage + 1)
  const debounceHandleNextPage = useCallback( debounce(handleNextPage, 200), [] )

  useEffect(() => {
    if(show) debounceHandleNextPage()
  }, [show])

  return (
    <div className="App__content">
      <div className="Gifs__container">
        <h3 className="LastKey__title">{ decodeURI(keyword) }</h3>
          <ListOfGifs gifs={gifs} />
        <div id="visor" ref={ elementRef }></div>
      </div>
      <LazyTrendGifs />
    </div>
  )
}

export { Results }