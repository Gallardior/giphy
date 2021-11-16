import React from "react";
import { Link } from "wouter";
import './Gif.css'

const Gif = ({ id, title, url}) => {
  return (
    <Link href={`/gif/${id}`} className="Gif">
      <h4 className="Gif__title">{ title }</h4>
      <figure>
        <img src={url} alt={ title }/>
      </figure>
    </Link>
  )
}

export { Gif }