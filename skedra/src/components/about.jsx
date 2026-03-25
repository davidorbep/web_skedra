import styles from './About.module.css'

const VALUES = [
  {
    title: 'Creatividad',
    desc: 'Ideas frescas y soluciones visuales únicas para cada marca.',
  },
  {
    title: 'Estrategia',
    desc: 'Cada acción tiene un porqué y un objetivo medible.',
  },
  {
    title: 'Compromiso',
    desc: 'Tu éxito es nuestro éxito. Trabajamos como socios.',
  },
  {
    title: 'Calidad',
    desc: 'Estándares altos en cada entregable, sin excepciones.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className={styles.about}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>Sobre SKEDRA</p>
        <h2 className={styles.title}>
          Creatividad con <em>propósito</em> y estrategia
        </h2>
        <p className={styles.text}>
          SKEDRA nació con una visión clara: ayudar a las marcas a comunicar
          su esencia de forma auténtica y poderosa. Somos un equipo apasionado
          por el diseño, la estrategia y el contenido que genera resultados reales.
        </p>
        <p className={styles.text}>
          Cada proyecto que tomamos es tratado como si fuera el nuestro.
          Nos involucramos profundamente con cada cliente para entender
          su negocio, su audiencia y sus objetivos.
        </p>
        <div className={styles.values}>
          {VALUES.map((v) => (
            <div key={v.title} className={styles.valueItem}>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <span className={styles.bigText}>SK</span>
        <div className={styles.imgPlaceholder}>
          <span className={styles.camIcon}>📸</span>
          <p>Foto del equipo SKEDRA</p>
        </div>
      </div>
    </section>
  )
}