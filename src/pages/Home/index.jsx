import React from 'react'
import { TrendGifs } from '../../components/TrendGifs/TrendGifs'
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs'
import { Loader } from '../../components/Loader/Loader'
import { useGifs } from '../../hooks/useGifs'

const Home = () => {
  const {loading, gifs} = useGifs()
  return (
    <>
      <TrendGifs />
      <h3>Ultima busqueda: { localStorage.getItem('lastKey') }</h3>
      {
        loading 
          ? <Loader />
          : <ListOfGifs gifs={gifs} />
      }
    </>
  )
}

export {Home}