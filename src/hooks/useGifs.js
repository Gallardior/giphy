import { useState, useEffect, useContext } from 'react'
import { getGifs } from '../services/getGifs'
import { Context } from '../context/GifsContext'

const INITIAL_PAGE = 0

function useGifs( keyword = localStorage.getItem('lastKey') ) {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(Context)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then(data => {
      setGifs(data)
      setLoading(false)
      localStorage.setItem('lastKey', keyword)
    })
  }, [keyword])

  useEffect(() => {
    if (page !== INITIAL_PAGE) {
      setLoading(true)
      getGifs({ keyword, page }).then(data => {
        setGifs(data)
        setLoading(false)
      })
    }
  }, [page])

  return {loading, gifs, setPage}
}

export { useGifs }