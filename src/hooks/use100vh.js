import { useState, useEffect } from 'react'

export const use100vh = () => {
  const [height, setHeight] = useState(window.innerHeight * 0.01)

  const handleResize = () => {
    const vh = window.innerHeight * 0.01
    setHeight(vh)
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return height
}
