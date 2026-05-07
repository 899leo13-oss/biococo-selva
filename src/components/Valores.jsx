const valores = [
  {
    id: 1,
    titulo: 'Sin aditivos',
    descripcion: 'Sin conservantes, colorantes ni químicos artificiales en ninguno de nuestros productos.',
    icono: '🛡️'
  },
  {
    id: 2,
    titulo: 'Artesanal',
    descripcion: 'Elaborado a mano en pequeños lotes con atención y cuidado en cada detalle.',
    icono: '🤝'
  },
  {
    id: 3,
    titulo: 'Local',
    descripcion: 'Ingredientes comprados directamente a agricultores locales de San Martín.',
    icono: '🏡'
  },
  {
    id: 4,
    titulo: 'Nutritivo',
    descripcion: 'Rico en minerales, vitaminas y antioxidantes naturales de la selva peruana.',
    icono: '⭐'
  }
]

function Valores() {
  return (
    <section className="valores" id="nosotros">
      <h2 className="section-title">Por qué elegir BioCoco Selva</h2>
      <div className="valores-grid">
        {valores.map((valor) => (
          <div key={valor.id} className="valor-card">
            <div className="valor-icono">{valor.icono}</div>
            <h3 className="valor-titulo">{valor.titulo}</h3>
            <p className="valor-descripcion">{valor.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Valores