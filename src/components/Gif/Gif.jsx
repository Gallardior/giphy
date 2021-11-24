import React, { useState } from "react";
import { BoxLoader } from "../BoxLoader/BoxLoader";
import { Link } from "wouter";
import './Gif.css'

const StaticGif = ({ id, title, url}) => {

  const [loaded, setLoaded] = useState(false)
  const className = !loaded ? 'd-none' : ''

  return (
    <Link href={`/gif/${id}`} className="Gif">
      <h4 className="Gif__title">{ title }</h4>
      <figure>
        <img src={url} alt={title} className={className} onLoad={() => setLoaded(true)} />
        { !loaded && <BoxLoader /> }
      </figure>
    </Link>
  )
}

const Gif = React.memo(StaticGif)
export { Gif }
// export default React.memo(Gif)