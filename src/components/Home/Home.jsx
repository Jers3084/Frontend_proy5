import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import facebook from './img/facebook_social_media_icon_gris.png'
import instagram from './img/circlesocialinstagram_gris.png'

export const Home = () => {
  return (
    <>
      <section className={styles.seccion1}>
        <article className={styles.txtSeccion1}>
          <h1 className={styles.titulo}>Tu salud en manos expertas</h1>
          <span className={styles.relleno} />
          <p className={styles.txtCuerpo}>
            Para recuperar tu salud, acércate a nosotros y conoce nuestros
            servicios
          </p>
          <form action="formcorreo">
            <input
              className={styles.entradaCorreo}
              type="email"
              name="correo"
              id="correodecontacto"
              placeholder="  Ingresa tu correo"
            />
            <button className={styles.boton}>Enviar</button>
          </form>
          <p className={styles.txtPie}>
            Te contactaremos en 24 horas. Aceptamos todas las tarjetas de
            crédito y débito.
          </p>
        </article>
        <article className={styles.imagenPrincipal} />
      </section>

      <section className={styles.seccion2}>
        <Link name="saltoseccion1" to="#"></Link>
        <header className={styles.tituloservicios}>
          <h1>Nuestros Servicios</h1>
          <br />
          <p className={styles.subTituloServicios}>
            Estos son los servicios para que recuperes tu salud por medio de la
            medicina complementaria
          </p>
        </header>

        <section className={styles.tarjetas}>
          <div className={styles.tarjeta}>
            <div className={styles.imgAcupuntura}></div>
            <br />
            <div className={styles.desc}>
              <h2>Acupuntura</h2>
              <br />
              <p className={styles.descripciones}>
                Disminuye el dolor cronico,libera el estrés y la ansiedad,
                mejora el insomnio y disminuye reacciones alérgicas.
              </p>
            </div>
          </div>
          <div className={styles.tarjeta}>
            <div className={styles.imgQuiropraxiaOsteopatia}></div>
            <br />
            <div className={styles.desc}>
              <h2>Quiropraxia y Osteopatia</h2>
              <br />
              <p className={styles.descripciones}>
                Corrige la postura y elimina el dolor de espalda, cintura y
                dolores de los huesos y musculos.
              </p>
            </div>
          </div>
          <div className={styles.tarjeta}>
            <div className={styles.imgRehabilitacion}></div>
            <br />
            <div className={styles.desc}>
              <h2>Rehabilitación Física</h2>
              <br />
              <p className={styles.descripciones}>
                Sana y recupera las capacidades motrices del individuo que ha
                sido afectado por una lesión o enfermedad.
              </p>
            </div>
          </div>
          <div className={styles.tarjeta}>
            <div className={styles.imgLinfatico}></div>
            <br />
            <div className={styles.desc}>
              <h2>Drenaje Linfatico</h2>
              <br />
              <p className={styles.descripciones}>
                El drenaje linfatico ayuda a desinflamar el cuerpo y
                extremidades,liberar toxinas y restablece el equilibrio y la
                salud.
              </p>
            </div>
          </div>
        </section>
      </section>

      <footer className={styles.piedepagina}>
        <div className={styles.pie}>
          <div className={styles.redesSociales}>
            <div className={styles.linkRedesSociales}>
              <Link
                className={styles.iconos}
                to=""
              >
                <img src={facebook} alt="" width="20px" height="20px" />{' '}
                Facebook
              </Link>
            </div>
            <div className={styles.linkRedesSociales}>
              <Link to="" className={styles.iconos}>
                <img src={instagram} alt="" width="20px" height="20px" />{' '}
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <p className={styles.copyright}>
          © 2021 Vid Natura. Todos los derechos reservados. Esta es una página
          de aterrizaje ficticia para fines académicos.
        </p>
      </footer>
    </>
  )
}
