import React, { useState } from 'react'
import { ListOfGifs } from './components/ListOfGifs/ListOfGid'
import { Route, Link } from 'wouter'
import './App.css' 

const App = () => {
  const [keyword, setKeyword] = useState('Goku')
  return (
    <section className="App">
      <h1>App</h1>
      <Link href="/gifs/Goku">Gifs de Goku</Link>
      <Link href="/gifs/Vegueta">Gifs de Vegueta</Link>
      <Link href="/gifs/Krillin">Gifs de Krillin</Link>
      <Link href="/gifs/Picollo">Gifs de Picollo</Link>
      <Link href="/gifs/Gohan">Gifs de Gohan</Link>
      
      <Route path="/gifs/:keyword">
        {params => <ListOfGifs keyword={params.keyword} />}
      </Route>
    </section>
  )
}

export default App
