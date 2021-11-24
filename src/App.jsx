import React, { Suspense } from 'react'
import { Searcher } from './components/Searcher/Searcher'
// import { Home } from './pages/Home'
// import { Results } from './pages/Results'
// import { Details } from './pages/Details'
import { Route, Link } from 'wouter'
import { GifsContextProvider } from './context/GifsContext'

const Home = React.lazy( () => import('./pages/Home') )
const Results = React.lazy( () => import('./pages/Results') )
const Details = React.lazy( () => import('./pages/Details') )

const App = () => {

  return (
    <GifsContextProvider>
      <section className="App">
        <h1 className="App__logo">
          <Link href="/">Giffy</Link>
        </h1>
        <Searcher />
        <Suspense fallback={ null } >
          <Route path="/">
            <Home />
          </Route>
          <Route path="/gifs/:keyword">
            {params => <Results keyword={params.keyword} />}
          </Route>
          <Route path="/gif/:id">
            {params => <Details id={params.id} />}
          </Route>
        </Suspense>
      </section>
    </GifsContextProvider>
  )
}

export default App
