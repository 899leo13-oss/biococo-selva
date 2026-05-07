import { useNavigate } from 'react-router-dom'
import imgCocoMiel from '../assets/coco-miel.webp'
import imgLuchita from '../assets/luchita.webp'

const productos = [
  {
    id: 'coco-miel',
    nombre: 'Coco Miel',
    descripcion: 'Conserva artesanal de pulpa de coco en trozos con miel de caña. Fuente de grasas saludables, hierro y antioxidantes naturales.',
    tags: ['Pulpa de coco', 'Miel de caña', 'Cáscara de limón', 'Sin conservantes'],
    imagen: imgCocoMiel
  },
  {
    id: 'upe-luchita',
    nombre: 'Upe la abuela Luchita',
    descripcion: 'La mejor bebida Regional Sanmartinense a base de maní, maíz y el mejor cacao de la zona. Un producto 100% natural.',
    tags: ['Maní', 'Maíz', 'El mejor cacao Sanmartinense', 'Sin conservantes'],
    imagen: imgLuchita
  },
  {
    id: 'paliperrochado',
    nombre: 'Paliperrochado',
    descripcion: 'Descripción próximamente',
    tags: ['Próximamente', 'Próximamente', 'Próximamente'],
    imagen: null
  }
]

function Productos() {
  const navigate = useNavigate()

  return (
    <section className="productos" id="productos">
      <p className="section-eyebrow">Lo que ofrecemos</p>
      <h2 className="section-title">Nuestros productos</h2>

      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">

            <div className="producto-img-wrapper">
              {producto.imagen ? (
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="producto-img"
                />
              ) : (
                <div className="producto-img-placeholder">
                  <span>📷 Imagen próximamente</span>
                </div>
              )}
            </div>

            <div className="producto-body">
              <h3 className="producto-nombre">{producto.nombre}</h3>
              <p className="producto-descripcion">{producto.descripcion}</p>
              <div className="producto-tags">
                {producto.tags.map((tag) => (
                  <span key={tag} className="producto-tag">{tag}</span>
                ))}
              </div>
              <button
                className="producto-btn"
                onClick={() => navigate(`/proceso/${producto.id}`)}
              >
                Ver proceso →
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Productos