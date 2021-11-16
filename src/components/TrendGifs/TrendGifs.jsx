import React from 'react'
import { Link } from 'wouter'
import './TrendGifs.css'

const TrendGifs = () => {
  const TRENDS = ['Goku', 'Vegeta', 'Picollo', 'Krillin', 'Gohan']

  return (
    <ul className="TrendGifs">
      {
        TRENDS.map(trend => <Link key={trend} href={`/gifs/${trend}`}>Gifs de {trend}</Link>)
      }
    </ul>
  )
}

export { TrendGifs }