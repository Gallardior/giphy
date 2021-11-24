import React, { useContext } from 'react'
import { Gif } from '../../components/Gif/Gif'
// import { Context } from '../../context/GifsContext'
import { useGifs } from '../../hooks/useGifs'

const Details = ({id}) => {
  const { gifs } = useGifs()
  const singleGif = gifs.find(gif => gif.id == id)

  return (
    singleGif
      ? <Gif {...singleGif} />
      : <h3>No disponible en memoria</h3>
  )
}

export default Details