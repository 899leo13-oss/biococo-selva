function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-top">

        <div className="footer-brand">
          <p className="footer-logo">BioCoco Selva</p>
          <p className="footer-slogan">Energia natural de la Amazonia peruana</p>
          <p className="footer-desc">
            Conservas artesanales 100% naturales elaboradas con ingredientes
            puros de la selva de San Martin, sin aditivos ni conservantes.
          </p>
          <div className="footer-redes">
            <a href="https://www.linkedin.com/in/biococo-selva-490021408/" target="_blank" rel="noreferrer" className="footer-red" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://x.com/BioCocoSelva" target="_blank" rel="noreferrer" className="footer-red" title="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.738-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="footer-red footer-red--disabled" title="Facebook proximamente">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          <a href="https://wa.me/51942884501" target="_blank" rel="noreferrer" className="footer-whatsapp">
            Escribir por WhatsApp
          </a>
        </div>

        <div className="footer-mapa">
          <p className="footer-col-titulo">Donde estamos</p>
          <div className="footer-mapa-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.3!2d-76.3952026!3d-6.4807462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ba0b692bc5240d%3A0x94efac13018ed70e!2sVILLA%20PALIPERROS!5e0!3m2!1ses!2spe!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion BioCoco Selva"
            />
          </div>
          <p className="footer-mapa-label">Villa Paliperros, San Martin, Peru</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>©2026 BioCoco Selva - Todos los derechos reservados</p>
        <p>Hecho con amor en San Martin, Peru</p>
      </div>
    </footer>
  )
}

export default Footer