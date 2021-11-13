import React from "react";
import './Gif.css'

const Gif = ({ id, title, url}) => {
  return (
    <div className="Gif">
      <h4>{ title }</h4>
      <small>{ id }</small>
      <figure>
        <img src={url} alt={ title }/>
      </figure>
    </div>
  )
}

export { Gif }