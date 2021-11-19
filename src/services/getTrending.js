const API_KEY = 'jcLGUlWOwLgT8329yIE9bF2c37rHi3zF'

function getTrending() {
  const URL = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`

  return fetch(URL)
    .then(response => response.json())
    .then(data => {
      return data.data 
    })
}

export { getTrending }