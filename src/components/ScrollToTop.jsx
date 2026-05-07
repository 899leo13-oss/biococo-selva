import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const scrollPositions = {}

function ScrollToTop() {
  const { pathname } = useLocation()
  const prevPathname = useRef(null)

  useEffect(() => {
    // Guarda la posición de la página anterior antes de cambiar
    if (prevPathname.current) {
      scrollPositions[prevPathname.current] = window.scrollY
    }

    // Si hay una posición guardada para esta página, restáurala
    if (scrollPositions[pathname] !== undefined) {
      setTimeout(() => {
        window.scrollTo(0, scrollPositions[pathname])
      }, 0)
    } else {
      window.scrollTo(0, 0)
    }

    prevPathname.current = pathname
  }, [pathname])

  return null
}

export default ScrollToTop