import React, { useState, useEffect } from "react";
import getGifs from '../../services/getGifs'
import { Gif } from "../Gif/Gif";
import './ListOfGifs.css'

const ListOfGifs = ({ keyword }) => {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true)
    getGifs(keyword).then(data => {
      setGifs(data)
      setLoading(false)
    })
  }, [keyword])


  return (
    <div className="ListOfGifs">
      {
        loading 
          ? <h1>Cargando...</h1>
          : gifs.map(gif => <Gif key={ gif.id } {...gif} />)
      }
    </div>  
  )
}

export { ListOfGifs }