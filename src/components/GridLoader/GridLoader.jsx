import React from "react";
import Masonry from "react-masonry-css";
import { BoxLoader } from "../BoxLoader/BoxLoader";
import './GridLoader.css'

const GridLoader = () => {

  const config = {
    default: 4,
    1100: 4,
    700: 3,
    500: 2
  }

  return (

    <Masonry
      breakpointCols={config}
      className="GridLoader"
      columnClassName="GridLoader__column">
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
        <BoxLoader />
    </Masonry>
  )
}

export { GridLoader }