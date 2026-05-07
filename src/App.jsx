import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Valores from './components/Valores'
import Productos from './components/Productos'
import Publico from './components/Publico'
import Footer from './components/Footer'
import ProcesoProducto from './pages/ProcesoProducto'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Valores />
            <Productos />
            <Publico />
            <Footer />
          </>
        } />
        <Route path="/proceso/:id" element={<ProcesoProducto />} />
      </Routes>
    </>
  )
}

export default App