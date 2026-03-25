import styles from './Services.module.css'

const SERVICES = [
  {
    num: '01',
    icon: '📣',
    title: 'Publicidad en Redes Sociales',
    desc: 'Campañas publicitarias en Meta (Facebook e Instagram) con segmentación precisa y creativos de alto impacto para maximizar tu inversión.',
  },
  {
    num: '02',
    icon: '✦',
    title: 'Diseño de Logos y Manual de Marca',
    desc: 'Creamos o rediseñamos tu identidad visual. Logotipos únicos y manuales de marca completos que transmiten la esencia de tu negocio.',
  },
  {
    num: '03',
    icon: '📱',
    title: 'Gestión de Redes Sociales',
    desc: 'Creación y optimización de páginas. Publicaciones estratégicas que construyen comunidad y reflejan tu personalidad de marca.',
  },
  {
    num: '04',
    icon: '📖',
    title: 'Diseño de Catálogos',
    desc: 'Catálogos digitales e impresos con diseño editorial que presenta tus productos y servicios de forma irresistible.',
  },
  {
    num: '05',
    icon: '🗓',
    title: 'Planificación de Contenido',
    desc: 'Calendario editorial mensual estratégico para mantener presencia constante y relevante en todas tus redes.',
  },
  {
    num: '06',
    icon: '📷',
    title: 'Fotografía Profesional',
    desc: 'Sesiones fotográficas de personas, productos y servicios. Imágenes que comunican calidad y generan confianza.',
  },
  {
    num: '07',
    icon: '🎬',
    title: 'Producción Audiovisual',
    desc: 'Edición y producción de videos publicitarios. Desde reels hasta spots completos que capturan la atención y convierten.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className={styles.services}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Lo que hacemos</p>
        <h2 className={styles.title}>
          Servicios que <em>transforman</em> marcas
        </h2>
        <p className={styles.sub}>
          Cada servicio está diseñado para que tu negocio destaque
          en el mundo digital y físico.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((svc) => (
          <div key={svc.num} className={styles.card}>
            <span className={styles.num}>{svc.num}</span>
            <div className={styles.iconWrap}>{svc.icon}</div>
            <h3 className={styles.cardTitle}>{svc.title}</h3>
            <p className={styles.desc}>{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}