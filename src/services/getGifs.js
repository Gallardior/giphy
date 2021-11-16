const API_KEY = 'jcLGUlWOwLgT8329yIE9bF2c37rHi3zF',
  LIMIT = '5'

function getGifs(keyword = 'Random') {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${LIMIT}&offset=0&rating=g&lang=en`

  return fetch(URL)
    .then(response => response.json())
    .then(data => {
      const response = data.data
      const gifs = response.map(gif => {
        const url = gif.images.original.url
        const { id, title } = gif
        return {url, id, title}
      })
      return gifs 
    })
}

export { getGifs }