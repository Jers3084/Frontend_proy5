import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import styles from "./Card.module.css";

export const Card = (props) => {
  const { userc, setUserc } = useContext(UserContext);
  var [cont, setCont] = useState(0);

  const agregar = () => {
    userc.shopping.push(props);
    console.log(userc.shopping);
    var long = userc.shopping.length;

    console.log(userc.shopping[long - 1].codigo);

    setUserc({ ...userc });
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.descripcion}</p>
        </div>
        <div className={styles.footer}>
          <button type="button" className="btn btn-primary" onClick={agregar}>
            Agregar
          </button>
          <p className={styles.precio}> Precio: {props.precio}</p>
        </div>
      </div>
    </div>
  );
};
