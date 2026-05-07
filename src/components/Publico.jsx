const perfiles = [
  {
    id: 1,
    emoji: '🏃‍♀️',
    titulo: 'Deportistas',
    descripcion: 'Energía natural antes y después del entrenamiento, sin azúcares procesadas.'
  },
  {
    id: 2,
    emoji: '🥗',
    titulo: 'Vida saludable',
    descripcion: 'Para quienes cuidan su alimentación y buscan snacks sin químicos artificiales.'
  },
  {
    id: 3,
    emoji: '👨‍👩‍👧',
    titulo: 'Familias',
    descripcion: 'Alternativa nutritiva y segura para toda la familia, incluyendo los más pequeños.'
  },
  {
    id: 4,
    emoji: '🌱',
    titulo: 'Veganos',
    descripcion: 'Productos 100% de origen vegetal, sin ingredientes de origen animal.'
  },
  {
    id: 5,
    emoji: '💚',
    titulo: 'Consumidores conscientes',
    descripcion: 'Personas que valoran el origen local, lo artesanal y el impacto positivo en la comunidad.'
  },
  {
    id: 6,
    emoji: '✨',
    titulo: 'Amantes de lo natural',
    descripcion: 'Quienes prefieren ingredientes reales de la selva peruana sobre productos industriales.'
  },
]

function Publico() {
  return (
    <section className="publico" id="publico">
      <div className="publico-inner">

        <div className="publico-header">
          <p className="section-eyebrow">Nuestro público</p>
          <h2 className="section-title">¿Para quién es BioCoco Selva?</h2>
          <p className="publico-desc">
            Pensados para personas que priorizan su bienestar y buscan
            alternativas naturales, libres de químicos y producidas
            artesanalmente en la Amazonía peruana.
          </p>
        </div>

        <div className="publico-grid">
          {perfiles.map((perfil) => (
            <div key={perfil.id} className="perfil-card">
              <span className="perfil-emoji">{perfil.emoji}</span>
              <h3 className="perfil-titulo">{perfil.titulo}</h3>
              <p className="perfil-desc">{perfil.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="publico-cta">
          <a href="#productos">Ver productos</a>
        </div>

      </div>
    </section>
  )
}

export default Publico