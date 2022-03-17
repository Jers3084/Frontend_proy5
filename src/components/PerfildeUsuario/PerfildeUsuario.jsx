import React from 'react'
import styles from './PerfildeUsuario.module.css'

export const PerfildeUsuario = () => {
  var nombreU = sessionStorage.getItem('nombreUsuario')
  var usernameU = sessionStorage.getItem('cuentaUsuario')
  var correoU = sessionStorage.getItem('correoUsuario')

  return (
    <>
      <div className={styles.contenedor}>
        <h2 className={styles.titulo}>Perfil del Usuario</h2>
        <form className={styles.formato}>
          <div className={styles.fullentry}>
            <label htmlFor="validationCustom01" className={styles.formlabel}>
              Nombre
            </label>
            <input
              readOnly
              type="text"
              className={styles.formcontrol}
              id="inputNombre"
              value={nombreU}
            />
          </div>

          <div className={styles.fullentry}>
            <label htmlFor="validationCustom02" className={styles.formlabel}>
              E-mail
            </label>
            <input
              readOnly
              type="email"
              className={styles.formcontrol}
              id="inputEmail"
              value={correoU}
            />
          </div>

          <div className={styles.fullentry}>
            <label
              htmlFor="validationCustomUsername"
              className={styles.formlabel}
            >
              Username
            </label>
            <input
              readOnly
              type="text"
              className={styles.formcontrol}
              id="inputUsername"
              aria-describedby="inputGroupPrepend"
              placeholder="Username"
              required
              value={usernameU}
            />
          </div>

          <div className={styles.contenBoton}>
            <button className={styles.boton} type="button">
              Editar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
