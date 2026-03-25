import styles from './Marquee.module.css'

const ITEMS = [
  'Publicidad Digital', 'Diseño de Marca', 'Redes Sociales',
  'Catálogos', 'Fotografía', 'Video Publicitario', 'Contenido Mensual',
]

export default function Marquee() {
  const allItems = [...ITEMS, ...ITEMS]

  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {allItems.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}