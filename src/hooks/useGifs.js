import { useState, useEffect, useContext } from 'react'
import { getGifs } from '../services/getGifs'
import { Context } from '../context/GifsContext'

function useGifs(keyword = localStorage.getItem('lastKey')) {
  const [loading, setLoading] = useState(false)
  // const [gifs, setGifs] = useState([])
  const { gifs, setGifs } = useContext(Context)

  useEffect(() => {
    setLoading(true)
    getGifs(keyword).then(data => {
      setGifs(data)
      setLoading(false)
      localStorage.setItem('lastKey', keyword)
    })
  }, [keyword])

  return {loading, gifs}
}

export { useGifs }