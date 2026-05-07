import { useState } from 'react'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Bio<span>Coco</span> Selva
      </div>

      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

      <a href="#contacto" className="navbar-btn">Pedir ahora</a>

      <button
        className="navbar-hamburguesa"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Menu"
      >
        {menuAbierto ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        )}
      </button>

      {menuAbierto && (
        <div className="navbar-menu-mobile">
          <a href="#inicio" onClick={cerrarMenu}>Inicio</a>
          <a href="#productos" onClick={cerrarMenu}>Productos</a>
          <a href="#nosotros" onClick={cerrarMenu}>Nosotros</a>
          <a href="#contacto" onClick={cerrarMenu}>Contacto</a>
          <a href="#contacto" onClick={cerrarMenu} className="navbar-menu-mobile-btn">
            Pedir ahora
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar