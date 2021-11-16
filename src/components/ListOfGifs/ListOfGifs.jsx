import React from "react";
import { Gif } from "../Gif/Gif";
// import { Loader } from "../Loader/Loader";
// import { useGifs } from "../../hooks/useGifs";
import './ListOfGifs.css'

const ListOfGifs = ({ gifs }) => {

  return (
    <div className="ListOfGifs">
      {
        gifs.map(gif => <Gif key={ gif.id } {...gif} />)
      }
    </div>  
  )
}

export { ListOfGifs }