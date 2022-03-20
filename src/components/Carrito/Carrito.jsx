import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import styles from "./Carrito.module.css";

export const Carrito = () => {
  const { userc } = useContext(UserContext);

  const pagar = () => {
    const body = { articulos: [] };
    userc.shopping.forEach((p) => {
      const add = { nombre: p.nombre, precio: p.precio, cantidad: 1 };
      body.articulos.push(add);
    });
    
    console.log(body);
    fetch("http://35.192.83.171:9000/api/pagos", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.success) {
          mostrarMP(response.data);
        }
      });
  };

  const mostrarMP = (token) => {
    //eslint-disable-next-line no-undef
    const mp = new MercadoPago("TEST-1cf2d8d5-e9f6-4804-9413-8c95219fa0e1", {
      locale: "es-MX",
    });

    // Inicializa el checkout
    mp.checkout({
      preference: {
        id: token,
      },
      render: {
        container: ".cho-container", // Indica el nombre de la clase donde se mostrará el botón de pago
        label: "Pagar", // Cambia el texto del botón de pago (opcional)
      },
    });
  };

  return (
    <>
      <div className={styles.contenedor}>
        <h3>Carrito</h3>
        <ul className="list-group">
          {userc.shopping.map((x) => {
            return (
              <li
                key={x._id}
                className="list-group-item d-flex justify-content-between align-items-center">
                {x.nombre}
                <span className="badge bg-primary rounded-pill">1</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.buttoncontainer}>
          <button type="button" className="btn btn-success" onClick={pagar}>
            Proceder
          </button>
          <div className="cho-container"></div>
        </div>
      </div>
    </>
  );
};
