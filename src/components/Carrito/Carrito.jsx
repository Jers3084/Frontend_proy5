import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import styles from "./Carrito.module.css";

export const Carrito = () => {
  const { userc } = useContext(UserContext);
  var cant = 0;
  var max = 0;
  var itemkey = 10;
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

  const borrar = () => {
    console.log(sessionStorage.getItem("index"));
    //userc.shopping.splice(item, 1);
  };

  return (
    <div className={styles.contenedor}>
      <h3>Carrito de compras</h3>
      <div key={1} className={styles.subcontenedor}>
        <div className={styles.list_nombre}>Nombre</div>
        <div className={styles.list_precio}>Precio</div>
        <div className={styles.list_cantidad}>Cantidad</div>
        <div className={styles.list_importe}>Importe</div>
        <div className={styles.contenedorBoton}>Eliminar</div>
      </div>

      <div className={styles.subcontenedor}>
        {userc.shopping.map((x) => {
          itemkey = itemkey + 1;
          importe = importe + x.precio * x.cantidad;
          max = x.stock;
          sessionStorage.setItem("index", x.index);
          return (
            <>
              <div key={itemkey} className={styles.list_nombre}>
                {x.nombre}
              </div>
              <div className={styles.list_precio}>{x.precio}</div>
              <div className={styles.list_cantidad}>{x.cantidad}</div>
              <div className={styles.list_importe}>{x.precio * x.cantidad}</div>
              <div className={styles.contenedorBoton}>
                {sessionStorage.setItem("index", x.index)}
                <button type="button" className={styles.boton} onClick={borrar}>
                  Eliminar
                </button>
              </div>
            </>
          );
        })}
      </div>

      <div key={2} className={styles.subcontenedor}>
        <div className={styles.list_nombre}></div>
        <div className={styles.list_precio}></div>
        <div className={styles.list_cantidad}>Total:</div>
        <div className={styles.list_importe}>{importe}</div>
        <div className={styles.contenedorBoton}></div>
      </div>
      <div className={styles.buttoncontainer}>
        <button type="button" className="btn btn-success" onClick={pagar}>
          Proceder
        </button>
        <div className="cho-container"></div>
      </div>
    </div>
  );
};
