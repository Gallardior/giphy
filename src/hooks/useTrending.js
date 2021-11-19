import { useState, useEffect } from 'react'
import { getTrending } from '../services/getTrending'

function useTrending() {
  const [loading, setLoading] = useState(false)
  const [trends, setTrends] = useState([])

  useEffect(() => {
    setLoading(true)
    getTrending().then(data => {
      setTrends(data)
      setLoading(false)
    })
  }, [])

  return {loading, trends}
}

export { useTrending }