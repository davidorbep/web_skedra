import styles from './Process.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Consulta inicial',
    desc: 'Entendemos tu marca, tus objetivos y tu audiencia en profundidad.',
  },
  {
    num: '02',
    title: 'Estrategia',
    desc: 'Diseñamos un plan creativo y estratégico a la medida de tu negocio.',
  },
  {
    num: '03',
    title: 'Producción',
    desc: 'Ejecutamos con precisión: diseño, contenido, campañas y más.',
  },
  {
    num: '04',
    title: 'Resultados',
    desc: 'Medimos, optimizamos y entregamos reportes claros de impacto.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className={styles.process}>
      <p className={styles.eyebrow}>Cómo trabajamos</p>
      <h2 className={styles.title}>
        Proceso simple, <em>resultados</em> extraordinarios
      </h2>

      <div className={styles.steps}>
        {STEPS.map((step) => (
          <div key={step.num} className={styles.step}>
            <div className={styles.numWrap}>
              <span className={styles.num}>{step.num}</span>
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}