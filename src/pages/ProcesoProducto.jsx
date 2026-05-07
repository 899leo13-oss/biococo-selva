import { useParams, useNavigate } from 'react-router-dom'

const data = {
  'coco-miel': {
    nombre: 'Coco Miel',
    descripcion: 'Conserva artesanal de pulpa de coco con miel de caña y cáscara de limón.',
    videoUrl: null,
    pasos: [
      {
        id: 1,
        titulo: 'Selección del coco',
        descripcion: 'Elegimos cocos frescos y maduros directamente de agricultores locales de San Martín, revisando uno por uno.'
      },
      {
        id: 2,
        titulo: 'Extracción de la pulpa',
        descripcion: 'La pulpa se extrae manualmente y se corta en trozos uniformes para garantizar una textura consistente.'
      },
      {
        id: 3,
        titulo: 'Mezcla con miel de caña',
        descripcion: 'Se mezcla la pulpa con miel de caña pura y cáscara de limón natural. Sin azúcar añadida ni conservantes.'
      },
      {
        id: 4,
        titulo: 'Envasado artesanal',
        descripcion: 'Se envasa en frascos de vidrio esterilizados y se sella al vacío para conservar todos los nutrientes.'
      }
    ]
  },
  'upe-luchita': {
    nombre: 'Upe la abuela Luchita',
    descripcion: 'La mejor bebida Regional Sanmartinense a base de maní, maíz y el mejor cacao de la zona.',
    videoUrl: null,
    pasos: [
      {
        id: 1,
        titulo: 'Selección de ingredientes',
        descripcion: 'Seleccionamos el mejor maní, maíz y cacao de la región San Martín, trabajando directamente con agricultores locales.'
      },
      {
        id: 2,
        titulo: 'Tostado artesanal',
        descripcion: 'El maní y el maíz se tuestan artesanalmente a fuego controlado para resaltar su sabor natural sin químicos.'
      },
      {
        id: 3,
        titulo: 'Preparación del cacao',
        descripcion: 'El cacao sanmartinense se procesa de forma natural, conservando todos sus antioxidantes y propiedades nutritivas.'
      },
      {
        id: 4,
        titulo: 'Mezcla y envasado',
        descripcion: 'Se mezclan todos los ingredientes en proporciones exactas y se envasa sin conservantes ni aditivos artificiales.'
      }
    ]
  },
  'paliperrochado': {
    nombre: 'Paliperrochado',
    descripcion: 'Próximamente más información sobre este producto.',
    videoUrl: null,
    pasos: [
      {
        id: 1,
        titulo: 'Próximamente',
        descripcion: 'El proceso de elaboración de este producto estará disponible muy pronto.'
      },
      {
        id: 2,
        titulo: 'Próximamente',
        descripcion: 'Estamos preparando toda la información para compartirla contigo.'
      },
      {
        id: 3,
        titulo: 'Próximamente',
        descripcion: 'Vuelve pronto para conocer todos los detalles de este producto artesanal.'
      },
      {
        id: 4,
        titulo: 'Próximamente',
        descripcion: 'BioCoco Selva sigue creciendo con nuevos productos naturales de la Amazonía.'
      }
    ]
  }
}

function ProcesoProducto() {
  const { id } = useParams()
  const navigate = useNavigate()
  const producto = data[id]

  if (!producto) {
    return (
      <div className="proceso-not-found">
        <p>Producto no encontrado.</p>
        <button onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    )
  }

  return (
    <div className="proceso-page">

      <div className="proceso-page-hero">
        <button className="proceso-back" onClick={() => navigate('/')}>
          ← Volver
        </button>
        <p className="proceso-page-eyebrow">Proceso artesanal</p>
        <h1 className="proceso-page-titulo">{producto.nombre}</h1>
        <p className="proceso-page-sub">{producto.descripcion}</p>
      </div>

      <div className="proceso-video-section">
        <h2 className="proceso-video-titulo">Video del proceso</h2>
        {producto.videoUrl ? (
          <div className="proceso-video-wrapper">
            <iframe
              src={producto.videoUrl}
              title={`Proceso de ${producto.nombre}`}
              allowFullScreen
              className="proceso-video"
            />
          </div>
        ) : (
          <div className="proceso-video-placeholder">
            <span className="proceso-video-icono">🎥</span>
            <p className="proceso-video-texto">Video del proceso próximamente</p>
            <p className="proceso-video-sub">
              Aquí se mostrará el video artesanal de elaboración
            </p>
          </div>
        )}
      </div>

      <div className="proceso-pasos-section">
        <h2 className="proceso-pasos-titulo">Paso a paso</h2>
        <div className="proceso-pasos-grid">
          {producto.pasos.map((paso) => (
            <div key={paso.id} className="proceso-paso-card">
              <div className="proceso-paso-num">{paso.id}</div>
              <div className="proceso-paso-body">
                <h3 className="proceso-paso-titulo">{paso.titulo}</h3>
                <p className="proceso-paso-desc">{paso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="proceso-page-footer">
        <button className="proceso-volver-btn" onClick={() => navigate('/')}>
          ← Ver todos los productos
        </button>
      </div>

    </div>
  )
}

export default ProcesoProducto