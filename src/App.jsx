import React, { useState } from 'react'
import { Home } from './pages/Home'
import { Results } from './pages/Results'
import { Details } from './pages/Details'
import { Route, Link, useLocation } from 'wouter'
import { Context, GifsContextProvider } from './context/GifsContext'

const App = () => {
  const [keyword, setKeyword] = useState('')
  const [, setLocation] = useLocation()

  function handleChange (e) {
    setKeyword(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    setLocation(`/gifs/${keyword}`)
  }

  return (
    <GifsContextProvider>
      <section className="App">
        <h1 className="App__logo">
          <Link href="/">Giffy</Link>
        </h1>
        <form onSubmit={ handleSubmit }>
          <input onChange={ handleChange } placeholder="Buscar..." value={ keyword }/>
          <button type="submit">Buscar</button>
        </form>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/gifs/:keyword">
          {params => <Results keyword={params.keyword} />}
        </Route>
        <Route path="/gif/:id">
          {params => <Details id={params.id} />}
        </Route>
      </section>
    </GifsContextProvider>
  )
}

export default App
