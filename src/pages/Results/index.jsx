import React from 'react'
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs'
import { Loader } from '../../components/Loader/Loader'
import { useGifs } from '../../hooks/useGifs'

const Results = ({keyword}) => {
  const { loading, gifs } = useGifs(keyword)

  return (
    <>
      {
        loading
          ? <Loader />
          : <ListOfGifs gifs={ gifs }/>
      }
    </>
  )
}

export { Results }