import { useState } from 'react'
import styles from './Portfolio.module.css'

const FILTERS = ['Todos', 'Branding', 'Campañas', 'Fotografía', 'Video', 'Redes Sociales']

// ─────────────────────────────────────────────
//  AGREGA TUS TRABAJOS AQUÍ
//  image: null = muestra placeholder
//  image: '/images/foto.jpg' = muestra tu imagen
// ─────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    category: 'Branding',
    title: 'Identidad visual',
    desc: 'Diseño de logo y manual de marca',
    image: null,
    color: '#1a4a5e',
    icon: '✦',
    featured: true,
  },
  {
    id: 2,
    category: 'Campañas',
    title: 'Campaña Meta',
    desc: 'Campaña publicitaria en redes sociales',
    image: null,
    color: '#0f3344',
    icon: '📣',
    featured: false,
  },
  {
    id: 3,
    category: 'Fotografía',
    title: 'Sesión de producto',
    desc: 'Fotografía de productos para e-commerce',
    image: null,
    color: '#1e5c78',
    icon: '📷',
    featured: false,
  },
  {
    id: 4,
    category: 'Redes Sociales',
    title: 'Catálogo digital',
    desc: 'Catálogo editorial para redes',
    image: null,
    color: '#0a2a38',
    icon: '📖',
    featured: false,
  },
  {
    id: 5,
    category: 'Video',
    title: 'Spot publicitario',
    desc: 'Video publicitario para Instagram',
    image: null,
    color: '#143d52',
    icon: '🎬',
    featured: false,
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section id="portafolio" className={styles.portfolio}>
      <p className={styles.eyebrow}>Nuestro trabajo</p>
      <h2 className={styles.title}>
        Proyectos que <em>hablan</em> por sí solos
      </h2>

      <div className={styles.filters}>
        {FILTERS.map(f => (
          <button
            key={f}
            className={`${styles.filterBtn} ${active === f ? styles.active : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((project, i) => (
          <div
            key={project.id}
            className={`${styles.item} ${project.featured && i === 0 ? styles.featured : ''}`}
            style={{ background: project.color }}
          >
            {project.image ? (
              <img src={project.image} alt={project.title} className={styles.img} />
            ) : (
              <div className={styles.placeholder}>
                <span className={styles.pIcon}>{project.icon}</span>
                <span className={styles.pCat}>{project.category}</span>
                <span className={styles.pTitle}>{project.title}</span>
                <span className={styles.pDesc}>{project.desc}</span>
              </div>
            )}
            <div className={styles.overlay}>
              <span className={styles.oCat}>{project.category}</span>
              <span className={styles.oTitle}>{project.title}</span>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.note}>
        ✦ Para agregar trabajos reales: cambia <code>image: null</code> por la ruta de tu imagen en <code>Portfolio.jsx</code>
      </p>
    </section>
  )
}