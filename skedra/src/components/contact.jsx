import { useState } from 'react'
import styles from './Contact.module.css'

const SERVICES = [
  'Publicidad en redes sociales',
  'Diseño de logo / Manual de marca',
  'Gestión de redes sociales',
  'Diseño de catálogos',
  'Planificación de contenido',
  'Fotografía profesional',
  'Producción audiovisual',
  'Paquete completo',
]

export default function Contact() {
  const [form, setForm] = useState({
    nombre: '', email: '', servicio: '', mensaje: ''
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí conectas tu backend o servicio de email (EmailJS, Formspree, etc.)
    console.log('Formulario enviado:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ nombre: '', email: '', servicio: '', mensaje: '' })
  }

  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>Hablemos</p>
        <h2 className={styles.title}>
          Hablemos de tu <em>próximo proyecto</em>
        </h2>
        <p className={styles.sub}>
          ¿Tienes una idea o quieres saber cómo podemos ayudarte?
          Estamos listos para escucharte.
        </p>

        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📧</div>
            <span>skedra.ecu@gmail.com</span>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📱</div>
            <span>+593 (098 473 7713)</span>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📍</div>
            <span>Quito, Ecuador</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        {sent ? (
          <div className={styles.successMsg}>
            <span>✦</span>
            <p>¡Mensaje enviado! Nos pondremos en contacto pronto.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.group}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.group}>
              <label>Servicio de interés</label>
              <select
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un servicio</option>
                {SERVICES.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className={styles.group}>
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                placeholder="Cuéntanos sobre tu proyecto..."
                value={form.mensaje}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Enviar mensaje →
            </button>
          </form>
        )}
      </div>
    </section>
  )
}