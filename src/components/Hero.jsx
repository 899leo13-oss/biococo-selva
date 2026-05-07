function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-deco hero-deco--left">
        <div className="deco-coco">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <ellipse cx="60" cy="65" rx="45" ry="42" fill="#5D4037"/>
            <ellipse cx="60" cy="63" rx="45" ry="42" fill="#4E342E"/>
            <ellipse cx="60" cy="55" rx="32" ry="30" fill="#EFEBE9"/>
            <ellipse cx="60" cy="52" rx="22" ry="20" fill="#F5F5F0"/>
            <ellipse cx="60" cy="30" rx="18" ry="10" fill="#3E2723" opacity="0.3"/>
          </svg>
        </div>
        <div className="deco-limon">
          <svg viewBox="0 0 80 80" width="80" height="80">
            <ellipse cx="40" cy="40" rx="32" ry="24" fill="#F9E04B" transform="rotate(-20 40 40)"/>
            <ellipse cx="40" cy="40" rx="28" ry="20" fill="#F5C842" transform="rotate(-20 40 40)"/>
            <path d="M20 30 Q40 20 60 30" stroke="#E8B800" strokeWidth="1.5" fill="none"/>
            <path d="M18 38 Q40 28 62 38" stroke="#E8B800" strokeWidth="1" fill="none" opacity="0.5"/>
            <ellipse cx="15" cy="35" rx="6" ry="4" fill="#F9E04B" transform="rotate(-20 15 35)"/>
            <ellipse cx="65" cy="45" rx="6" ry="4" fill="#F9E04B" transform="rotate(-20 65 45)"/>
          </svg>
        </div>
        <div className="deco-hoja">
          <svg viewBox="0 0 100 140" width="80" height="110">
            <path d="M50 130 Q10 80 20 30 Q50 0 80 30 Q90 80 50 130Z" fill="#2D5A3D"/>
            <path d="M50 130 Q30 80 35 30" stroke="#4A7C5C" strokeWidth="2" fill="none"/>
            <path d="M35 60 Q50 55 65 60" stroke="#4A7C5C" strokeWidth="1.5" fill="none"/>
            <path d="M30 80 Q50 74 70 80" stroke="#4A7C5C" strokeWidth="1.5" fill="none"/>
            <path d="M35 100 Q50 95 65 100" stroke="#4A7C5C" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">San Martín · Perú · Selva Amazónica</p>
        <h1 className="hero-title">
          Bio<span>Coco</span> Selva
        </h1>
        <p className="hero-badge">Productos 100% naturales de la Amazonía</p>
        <p className="hero-sub">
          Conservas artesanales elaboradas con ingredientes puros de la selva
          peruana, sin aditivos ni conservantes artificiales.
        </p>
        <div className="hero-botones">
          <a href="#productos" className="hero-cta">Descubrir productos</a>
          <a href="#nosotros" className="hero-cta-sec">Conocer más</a>
        </div>
      </div>

      <div className="hero-deco hero-deco--right">
        <div className="deco-cana">
          <svg viewBox="0 0 80 160" width="70" height="140">
            <rect x="30" y="5" width="18" height="150" rx="9" fill="#8BC34A"/>
            <rect x="30" y="5" width="18" height="150" rx="9" fill="url(#canaGrad)"/>
            <defs>
              <linearGradient id="canaGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#689F38"/>
                <stop offset="50%" stopColor="#9CCC65"/>
                <stop offset="100%" stopColor="#558B2F"/>
              </linearGradient>
            </defs>
            <line x1="30" y1="35" x2="48" y2="35" stroke="#558B2F" strokeWidth="2"/>
            <line x1="30" y1="65" x2="48" y2="65" stroke="#558B2F" strokeWidth="2"/>
            <line x1="30" y1="95" x2="48" y2="95" stroke="#558B2F" strokeWidth="2"/>
            <line x1="30" y1="125" x2="48" y2="125" stroke="#558B2F" strokeWidth="2"/>
            <path d="M48 35 Q70 25 65 10" stroke="#8BC34A" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M30 65 Q8 55 12 40" stroke="#8BC34A" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M48 95 Q70 85 66 70" stroke="#8BC34A" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="deco-cana" style={{ marginLeft: '-20px', opacity: 0.6 }}>
          <svg viewBox="0 0 80 160" width="50" height="110">
            <rect x="30" y="20" width="14" height="130" rx="7" fill="#7CB342"/>
            <line x1="30" y1="50" x2="44" y2="50" stroke="#558B2F" strokeWidth="1.5"/>
            <line x1="30" y1="80" x2="44" y2="80" stroke="#558B2F" strokeWidth="1.5"/>
            <line x1="30" y1="110" x2="44" y2="110" stroke="#558B2F" strokeWidth="1.5"/>
            <path d="M44 50 Q62 42 58 28" stroke="#8BC34A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="deco-hoja-r">
          <svg viewBox="0 0 100 140" width="70" height="100">
            <path d="M50 130 Q10 80 20 30 Q50 0 80 30 Q90 80 50 130Z" fill="#1B5E20" opacity="0.7"/>
            <path d="M50 130 Q30 80 35 30" stroke="#2E7D32" strokeWidth="2" fill="none"/>
            <path d="M35 70 Q50 64 65 70" stroke="#2E7D32" strokeWidth="1.5" fill="none"/>
            <path d="M32 90 Q50 84 68 90" stroke="#2E7D32" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat-card">
          <span className="hero-stat-numero">100%</span>
          <span className="hero-stat-label">Natural · Sin aditivos</span>
        </div>
        <div className="hero-stat-card hero-stat-card--amber">
          <span className="hero-stat-numero">3+</span>
          <span className="hero-stat-label">Productos artesanales</span>
        </div>
        <div className="hero-stat-card">
          <span className="hero-stat-numero">🌿</span>
          <span className="hero-stat-label">Selva Amazónica peruana</span>
        </div>
        <div className="hero-stat-card hero-stat-card--amber">
          <span className="hero-stat-numero">0</span>
          <span className="hero-stat-label">Conservantes artificiales</span>
        </div>
      </div>

    </section>
  )
}

export default Hero