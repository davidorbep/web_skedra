import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgShape} />
      <div className={styles.bgCircle} />
      <div className={styles.bgDot} />

      <div className={styles.left}>
        <span className={styles.badge}>Agencia Creativa — Ecuador</span>
        <h1>
          Tu marca<br />
          <em>merece más</em><br />
          que lo ordinario.
        </h1>
        <p>
          Somos SKEDRA, agencia de marketing creativo. Diseñamos,
          comunicamos y hacemos crecer marcas con estrategia,
          identidad y contenido que impacta.
        </p>
        <div className={styles.btns}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('#servicios')}>
            Ver servicios
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('#portafolio')}>
            Nuestro trabajo
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <span className={styles.tag}>Agencia Creativa</span>
        <div className={styles.statCard}>
          <span className={styles.num}>7+</span>
          <span className={styles.label}>Servicios especializados</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.num}>100%</span>
          <span className={styles.label}>Enfoque en resultados</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.num}>∞</span>
          <span className={styles.label}>Creatividad sin límites</span>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}