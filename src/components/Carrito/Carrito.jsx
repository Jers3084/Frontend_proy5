import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import styles from "./Carrito.module.css";

export const Carrito = () => {
  const { userc } = useContext(UserContext);
  var cont = 0;
  var importe = 0;

  const pagar = () => {
    const body = { articulos: [] };
    userc.shopping.forEach((p) => {
      const add = { nombre: p.nombre, precio: p.precio, cantidad: p.cantidad };
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
        <ul className={styles.listado_ul}>
          <>
            <li key={cont} className={styles.list_group_item1}>
              Articulo o Servicio
            </li>
            <li key={cont + 50} className={styles.list_group_item2}>
              Precio Unitario{" "}
            </li>
            <li key={cont + 100} className={styles.list_group_item3}>
              Cantidad
            </li>
            <li key={cont + 200} className={styles.list_group_item4}>
              Importe
            </li>
          </>
          {userc.shopping.map((x) => {
            cont = cont + 1;
            importe = (importe+(x.precio * x.cantidad));
            return (
              <>
                <li key={cont} className={styles.list_group_item1}>
                  {x.nombre}
                </li>
                <li key={cont + 50} className={styles.list_group_item2}>
                  {x.precio}
                </li>
                <li key={cont + 100} className={styles.list_group_item3}>
                  {x.cantidad}
                </li>
                <li key={cont + 200} className={styles.list_group_item4}>
                  {x.precio * x.cantidad}
                </li>
              </>
            );
          })}
          <>
            <li key={cont} className={styles.list_group_item1}></li>
            <li key={cont + 50} className={styles.list_group_item2}></li>
            <li key={cont + 100} className={styles.list_group_item5}>
              Total:
            </li>
            <li key={cont + 200} className={styles.list_group_item4}>
            {importe}
            </li>
          </>
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
