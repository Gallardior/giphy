import React, { Suspense } from 'react'
import { Loader } from '../Loader/Loader'
// import TrendGifs from './TrendGifs'
import { useNearScreen } from '../../hooks/useNearScreen'

const TrendGifs = React.lazy(
  () => import('./TrendGifs')
)

const LazyTrendGifs = () => {
  const {show, elementRef} = useNearScreen()
  
  return (
    <Suspense fallback={ <Loader /> }>
      <div ref={elementRef}>
        {
          show ? <TrendGifs /> : <Loader />
        }
      </div> 
    </Suspense>
  )
}

export { LazyTrendGifs }