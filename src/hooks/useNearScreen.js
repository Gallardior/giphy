import {useState, useEffect, useRef} from 'react'

function useNearScreen({distance = '100px', once = true} = {}) {
  const [ show, setShow ] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    
    const onShow = (entries, observer) => {
      const element = entries[0]
      
      if (element.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    const observer = new IntersectionObserver(onShow, {
      rootMargin: distance
    })

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  })

  return {show, elementRef}
}

export { useNearScreen }