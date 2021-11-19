import React from 'react'
import { Loader } from '../Loader/Loader'
import { Link } from 'wouter'
import { useTrending } from '../../hooks/useTrending'
import './TrendGifs.css'

const TrendGifs = () => {
  const { loading, trends } = useTrending()

  return (
    <div className="TrendGifs">
      <h3 className="TrendGifs__title">Trending</h3>
      <ul className="TrendGifs__list">
        {
          loading
            ? <Loader />
            : trends.map(trend => <Link key={trend} href={`/gifs/${trend}`}>Gifs de {trend}</Link>)
        }
      </ul>
    </div>
  )
}

export default TrendGifs