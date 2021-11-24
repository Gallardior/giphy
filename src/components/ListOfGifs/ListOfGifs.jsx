import React from "react";
import Masonry from "react-masonry-css";
import { Gif } from "../Gif/Gif";
import './ListOfGifs.css'

const ListOfGifs = ({ gifs }) => {

  const config = {
    default: 4,
    1100: 4,
    700: 3,
    500: 2
  }

  return (

    <Masonry
      breakpointCols={config}
      className="ListOfGifs"
      columnClassName="ListOfGifs__column">
      {
        gifs.map((gif, i) => <Gif key={gif.id + gif.url} {...gif} />)
      }
    </Masonry>
  )
}

export { ListOfGifs }