import React from 'react'
import { LazyTrendGifs } from '../../components/TrendGifs/LazyTrendsGifs'
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs'
// import { Loader } from '../../components/Loader/Loader'
// import { GridLoader } from '../../components/GridLoader/GridLoader'
import { useGifs } from '../../hooks/useGifs'

const Home = () => {
  const {loading, gifs} = useGifs()
  return (
    <div className="App__content">
      <div className="Gifs__container">
        <h3 className="LastKey__title">Ultima busqueda</h3>
          <ListOfGifs gifs={gifs} />
      </div>
      <LazyTrendGifs />
    </div>
  )
}

export {Home}