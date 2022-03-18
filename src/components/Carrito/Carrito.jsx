import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import styles from './Carrito.module.css'

export const Carrito = () => {
  const { userc } = useContext(UserContext)
  return (
    <>
      <div className={styles.contenedor}>
        <h3>Carrito</h3>
        <ul className="list-group">
          {userc.shopping.map((x) => {
            return (
              <li
                key={x._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {x.nombre}
                <span className="badge bg-primary rounded-pill">1</span>
              </li>
            )
          })}
        </ul>
        <div className={styles.buttoncontainer}>
          <button type="button" className="btn btn-success">
          Proceder
          </button>
        </div>
      </div>
    </>
  )
}
